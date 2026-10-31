import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const certificatesDirectory = join(projectRoot, "public", "certificates");
const previewsDirectory = join(projectRoot, "public", "certificate-previews");
const pdfFiles = (await readdir(certificatesDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
  .map((entry) => entry.name);

await rm(previewsDirectory, { recursive: true, force: true });
await mkdir(previewsDirectory, { recursive: true });

for (const fileName of pdfFiles) {
  const hash = createHash("sha256").update(fileName).digest("hex").slice(0, 16);
  const data = new Uint8Array(await readFile(join(certificatesDirectory, fileName)));
  const loadingTask = pdfjs.getDocument({
    data,
    standardFontDataUrl: `${join(projectRoot, "node_modules", "pdfjs-dist", "standard_fonts")}/`,
  });
  const pdf = await loadingTask.promise;

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.35 });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext("2d");
    await page.render({ canvas, canvasContext: context, viewport }).promise;
    const previewPath = join(previewsDirectory, `${hash}-p${pageNumber}.jpg`);
    await writeFile(previewPath, canvas.toBuffer("image/jpeg", 88));
    page.cleanup();
  }

  await loadingTask.destroy();
  console.log(`Rendered ${fileName} (${pdf.numPages} page${pdf.numPages === 1 ? "" : "s"})`);
}
