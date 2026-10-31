# G. Priyadharshini — Portfolio

A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. The project is configured for static export and Netlify hosting.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Netlify

```bash
npm run build
```

Next.js writes the static site to `out/`. The included `netlify.toml` sets `npm run build` as the build command, `out` as the publish directory, and Node.js 22 for the build environment.

To receive contact form submissions after deploying, enable **Forms → Form detection** in the Netlify site settings. The form posts to the included `/thank-you/` page. Form submissions can then be reviewed in the Netlify dashboard.

## Add certificates later

Drop certificate PDFs or image files into `public/certificates/`. The portfolio automatically creates a card for each supported file (PDF, PNG, JPG, JPEG, WebP, AVIF, or SVG), using its file name as the title. The `predev` and `prebuild` scripts render each PDF page into a preview image, so PDF previews work consistently across browsers; image certificates preview directly. Visitors can close the preview with Escape or by clicking outside it, or open the original file in a new tab. Generated page images are stored in `public/certificate-previews/` and included in the Netlify static export.

The certificate scans supplied for this portfolio are stored in `public/certificates/`. The resume is available at `public/resume.pdf` and can be regenerated from `scripts/create-resume.py` when the confirmed details change. No portrait or external project URLs were included in the brief, so the project cards describe the work without linking to unavailable destinations.

Project images are stored in `public/projects/`; update `content/project-media.json` when replacing them. Run `npm run test:project-media` to check that each mapped image exists and has descriptive alt text.
