import { describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

describe("CSS Quality & Asset Regression Tests", () => {
  const stylesPath = resolve(import.meta.dir, "../dist/styles.css");

  test("dist/styles.css is built and exists", () => {
    expect(existsSync(stylesPath)).toBe(true);
  });

  test("dist/styles.css does not contain broken relative asset URLs (e.g. flag SVGs)", () => {
    const cssContent = readFileSync(stylesPath, "utf-8");

    // Prevent regressions where relative asset URLs (like ../flags/*.svg) crash Turbopack/Next.js bundlers
    const relativeUrlRegex = /url\(\s*['"]?\.\.\/[^'")]+\s*['"]?\)/gi;
    const matches = cssContent.match(relativeUrlRegex);

    expect(matches).toBeNull();
  });

  test("dist/styles.css does not contain unresolved flag-icons paths", () => {
    const cssContent = readFileSync(stylesPath, "utf-8");
    expect(cssContent.includes("flags/1x1")).toBe(false);
    expect(cssContent.includes("flags/4x3")).toBe(false);
  });

  test("dist/styles.css contains required theme custom properties", () => {
    const cssContent = readFileSync(stylesPath, "utf-8");

    const requiredTokens = [
      "--astryx-color-background-body",
      "--astryx-color-text-primary",
      "--astryx-color-accent",
      "--astryx-font-family-body",
    ];

    for (const token of requiredTokens) {
      expect(cssContent.includes(token)).toBe(true);
    }
  });
});
