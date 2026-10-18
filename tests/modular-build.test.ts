import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { exportSurface } from "../scripts/export-surface";
import { expectedExports } from "../scripts/sync-exports";
import * as SourceExports from "../src/index";

const root = resolve(import.meta.dir, "..");
const dist = (p: string) => resolve(root, "dist", p);
const read = (p: string) => readFileSync(p, "utf8");

const DIRECTIVE = /^\s*(?:\/\/[^\n]*\n\s*|\/\*[\s\S]*?\*\/\s*)*["']use client["']/;

function modules() {
  const list = (dir: string, ext: string) =>
    readdirSync(resolve(root, "src", dir))
      .filter((f) => f.endsWith(ext))
      .map((f) => ({ name: `${dir}/${f.slice(0, -ext.length)}`, source: resolve(root, "src", dir, f) }));
  return [...list("lib", ".ts"), ...list("components/ui", ".tsx")];
}

function codeLines(text: string) {
  return text
    .replace(/\/\/# sourceMappingURL=.*$/m, "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("//"));
}

describe("per-component build", () => {
  const all = modules();

  test("dist/index.js only re-exports kit modules", () => {
    const lines = codeLines(read(dist("index.js")));
    expect(lines.length).toBe(all.length);
    for (const line of lines) {
      expect(line).toMatch(/^export \* from "\.\/(?:lib|components\/ui)\/[a-z0-9-]+\.js";$/);
    }
  });

  test("dist/index.cjs only re-exports kit modules", () => {
    const text = read(dist("index.cjs"));
    // Each module appears twice: in __reExport(...) and in esbuild's
    // `0 && (module.exports = {...require()})` hint for Node's CJS lexer.
    const requires = [...new Set([...text.matchAll(/require\("([^"]+)"\)/g)].map((m) => m[1]))];
    expect(requires.length).toBe(all.length);
    for (const spec of requires) {
      expect(spec).toMatch(/^\.\/(?:lib|components\/ui)\/[a-z0-9-]+\.cjs$/);
    }
    // esbuild's ~15 lines of interop helpers plus one line per module.
    expect(codeLines(text).length).toBeLessThan(2 * all.length + 25);
  });

  test("every module is built on its own, with \"use client\" exactly where the source has it", () => {
    for (const { name, source } of all) {
      const client = DIRECTIVE.test(read(source));
      for (const ext of [".js", ".cjs"]) {
        const file = dist(name + ext);
        expect(existsSync(file)).toBe(true);
        const startsWithDirective = read(file).startsWith('"use client";\n');
        if (startsWithDirective !== client) {
          throw new Error(`${name}${ext}: expected "use client" ${client ? "on line 1" : "to be absent"}`);
        }
      }
      expect(existsSync(dist(`${name}.d.ts`))).toBe(true);
      expect(existsSync(dist(`${name}.d.cts`))).toBe(true);
    }
    expect(read(dist("index.js")).includes("use client")).toBe(false);
  });

  test("modules import siblings instead of bundling them (no shared chunks)", () => {
    const expected = new Set(["index", ...all.map((m) => m.name)]);
    const walk = (dir: string, prefix = ""): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(resolve(dir, e.name), `${prefix}${e.name}/`) : [`${prefix}${e.name}`],
      );
    for (const file of walk(resolve(root, "dist"))) {
      if (file === "styles.css") continue;
      const name = file.replace(/\.(?:js|cjs|d\.ts|d\.cts)(?:\.map)?$/, "");
      expect(expected.has(name) ? name : `unexpected dist file: ${file}`).toBe(name);
    }
    // The button source is defined once, in button.js, and imported elsewhere.
    const combobox = read(dist("components/ui/combobox.js"));
    expect(combobox).toContain('from "./button.js"');
    expect(combobox).toContain('from "../../lib/utils.js"');
    expect(combobox).not.toContain("// src/components/ui/button.tsx");
  });

  test("package.json exports list every module and point at real files", () => {
    const pkg = JSON.parse(read(resolve(root, "package.json")));
    expect(pkg.exports).toEqual(expectedExports());
    expect(pkg.exports["."]).toEqual({
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs",
    });
    expect(pkg.exports["./styles.css"]).toBe("./dist/styles.css");
    for (const [subpath, target] of Object.entries(pkg.exports)) {
      const files = typeof target === "string" ? [target] : Object.values(target as Record<string, string>);
      for (const file of files) {
        if (!existsSync(resolve(root, file))) throw new Error(`${subpath} -> missing ${file}`);
      }
    }
  });

  test("subpath modules load and match the root export", async () => {
    const root = await import("../dist/index.js");
    const button = await import("../dist/components/ui/button.js");
    expect(button.Button).toBe(root.Button);
    const dialogCjs = require("../dist/components/ui/dialog.cjs");
    expect(dialogCjs.Dialog).toBeDefined();
  });

  test("runtime export list matches the source in ESM and CJS", async () => {
    const source = Object.keys(SourceExports).sort();
    const esm = Object.keys(await import("../dist/index.js")).sort();
    const cjs = Object.keys(require("../dist/index.cjs")).filter((k) => k !== "__esModule").sort();
    expect(esm).toEqual(source);
    expect(cjs).toEqual(source);
  });

  test(
    "public type surface of dist/index.d.ts matches src/index.ts",
    () => {
      expect(exportSurface(dist("index.d.ts"))).toEqual(exportSurface(resolve(root, "src/index.ts")));
    },
    60_000,
  );
});
