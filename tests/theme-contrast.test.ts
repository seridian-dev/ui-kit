import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// WCAG 2.x contrast for the default (Seridian) theme tokens in both schemes.
const css = readFileSync(resolve(import.meta.dir, "../src/styles/globals.css"), "utf8");
const block = css.slice(css.indexOf(":root,\n[data-ui-theme=\"neutral\"] {"), css.indexOf("[data-ui-theme=\"stone\"] {"));

function token(name: string, scheme: "light" | "dark"): string {
  const match = new RegExp(`--astryx-color-${name}:\\s*([^;]+);`).exec(block);
  if (!match) throw new Error(`token ${name} not found`);
  const value = match[1]!.trim();
  const pair = /^light-dark\(\s*(#[0-9a-f]+)\s*,\s*(#[0-9a-f]+)\s*\)$/i.exec(value);
  if (pair) return scheme === "light" ? pair[1]! : pair[2]!;
  return value;
}

function rgba(hex: string): [number, number, number, number] {
  const h = hex.slice(1);
  const n = (i: number) => parseInt(h.slice(i, i + 2), 16);
  return [n(0), n(2), n(4), h.length === 8 ? n(6) / 255 : 1];
}

function luminance([r, g, b]: number[]) {
  const c = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * c(r!) + 0.7152 * c(g!) + 0.0722 * c(b!);
}

function contrast(fg: string, bg: string) {
  const [br, bgG, bb] = rgba(bg);
  const [fr, fgG, fb, a] = rgba(fg);
  const composite = [fr * a + br * (1 - a), fgG * a + bgG * (1 - a), fb * a + bb * (1 - a)];
  const l1 = luminance(composite);
  const l2 = luminance([br, bgG, bb]);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const surfaces = [
  "background-body",
  "background-surface",
  "background-card",
  "background-popover",
  "background-muted",
  "accent-muted",
];
const textOnSurfaces = ["text-primary", "text-secondary", "accent", "success", "error", "warning"];
const filled: Array<[string, string]> = [
  ["on-accent", "accent"],
  ["on-success", "success"],
  ["on-error", "error"],
  ["on-warning", "warning"],
];

describe("default theme contrast (WCAG AA)", () => {
  for (const scheme of ["light", "dark"] as const) {
    test(`${scheme}: text tokens >= 4.5:1 on every surface`, () => {
      for (const fg of textOnSurfaces) {
        for (const bg of surfaces) {
          const ratio = contrast(token(fg, scheme), token(bg, scheme));
          if (ratio < 4.5) throw new Error(`${scheme} ${fg} on ${bg}: ${ratio.toFixed(2)}:1`);
        }
      }
    });

    test(`${scheme}: on-* text >= 4.5:1 on its fill`, () => {
      for (const [fg, bg] of filled) {
        const ratio = contrast(token(fg, scheme), token(bg, scheme));
        if (ratio < 4.5) throw new Error(`${scheme} ${fg} on ${bg}: ${ratio.toFixed(2)}:1`);
      }
    });

    test(`${scheme}: input borders and focus ring >= 3:1 (non-text)`, () => {
      for (const bg of ["background-body", "background-surface", "background-card"]) {
        for (const fg of ["border-emphasized", "accent"]) {
          const ratio = contrast(token(fg, scheme), token(bg, scheme));
          if (ratio < 3) throw new Error(`${scheme} ${fg} on ${bg}: ${ratio.toFixed(2)}:1`);
        }
      }
    });
  }

  test("uses the Auth identity values", () => {
    expect(token("accent", "dark")).toBe("#c8f04b");
    expect(token("background-body", "light")).toBe("#f3f1ed");
    expect(token("background-body", "dark")).toBe("#0b0b0f");
    expect(block).toContain('"Space Grotesk"');
    expect(block).toContain('"JetBrains Mono"');
  });
});
