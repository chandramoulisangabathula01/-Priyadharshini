import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const media = JSON.parse(readFileSync(join(root, "content", "project-media.json"), "utf8"));

test("project evidence is mapped to its matching cards with descriptive alt text", () => {
  assert.deepEqual(Object.keys(media), ["smartBlindStick", "rcAmplifier", "hartleyOscillator"]);

  for (const [project, image] of Object.entries(media)) {
    assert.ok(image.src.startsWith("/projects/"), `${project} should use a local portfolio asset`);
    assert.ok(image.alt.length >= 35, `${project} should have useful descriptive alt text`);
    assert.ok(existsSync(join(root, "public", image.src.slice(1))), `${project} image should exist`);
  }
});

test("the personal-project screenshots do not include the unrelated Alex Smith mockup", () => {
  const allAltText = Object.values(media).map(({ alt }) => alt).join(" ");
  assert.doesNotMatch(allAltText, /Alex Smith/i);
});
