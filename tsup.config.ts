import { readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import type { Plugin } from "esbuild";
import { defineConfig } from "tsup";

/**
 * Per-component build (0.6.0).
 *
 * Every src/components/ui/*.tsx and src/lib/*.ts file is its own entry and
 * its own output module (dist/components/ui/button.js, dist/lib/utils.js,
 * ...). Imports between kit modules stay imports: the plugin below marks
 * them external and rewrites them to the sibling's built file, so no code
 * is duplicated and there are no shared chunks. dist/index.js is therefore
 * nothing but `export * from "./components/ui/<name>.js"` lines, and a
 * consumer's bundler only pulls in the modules it actually uses
 * (package.json "sideEffects" only lists CSS).
 *
 * "use client": esbuild strips source directives during bundling
 * (github.com/evanw/esbuild/issues/3115) and also strips directive-shaped
 * banners. Since each output maps to exactly one source file, the plugin
 * re-adds the directive to exactly the outputs whose source starts with one.
 * tests/modular-build.test.ts fails if that ever drifts.
 */

const SRC = resolve(import.meta.dirname, "src");
const SOURCE_EXTENSIONS = [".tsx", ".ts"];

function listModules(dir: string, ext: string): string[] {
  return readdirSync(join(SRC, dir))
    .filter((file) => file.endsWith(ext))
    .sort()
    .map((file) => `${dir}/${file.slice(0, -ext.length)}`);
}

/** Output name (relative to src and dist, no extension) -> source file. */
const modules = [
  ...listModules("lib", ".ts"),
  ...listModules("components/ui", ".tsx"),
];
const entry: Record<string, string> = { index: "src/index.ts" };
for (const name of modules) {
  const file = SOURCE_EXTENSIONS.map((ext) => join(SRC, name + ext)).find(
    (candidate) => {
      try {
        readFileSync(candidate);
        return true;
      } catch {
        return false;
      }
    },
  );
  if (!file) throw new Error(`No source file for module ${name}`);
  entry[name] = relative(import.meta.dirname, file);
}

const sourceByName = new Map(
  Object.entries(entry).map(([name, file]) => [name, resolve(file)]),
);
const nameBySource = new Map(
  [...sourceByName].map(([name, file]) => [file, name]),
);

const USE_CLIENT = /^\s*(?:\/\/[^\n]*\n\s*|\/\*[\s\S]*?\*\/\s*)*["']use client["']/;

function resolveSource(spec: string, resolveDir: string): string | undefined {
  const base = spec.startsWith("@/")
    ? join(SRC, spec.slice(2))
    : resolve(resolveDir, spec);
  const candidates = extname(base)
    ? [base]
    : SOURCE_EXTENSIONS.map((ext) => base + ext);
  return candidates.find((candidate) => nameBySource.has(candidate));
}

function kitModulesPlugin(): Plugin {
  return {
    name: "seridian-kit-modules",
    setup(build) {
      const outExt = build.initialOptions.format === "cjs" ? ".cjs" : ".js";

      build.onResolve({ filter: /^(?:@\/|\.\.?\/)/ }, (args) => {
        if (args.kind === "entry-point") return undefined;
        const target = resolveSource(args.path, args.resolveDir);
        const importerName = nameBySource.get(args.importer);
        if (!target || !importerName) {
          return {
            errors: [
              {
                text: `"${args.path}" (imported by ${relative(SRC, args.importer)}) is not a kit module entry. Every src import must be its own module so nothing is bundled twice.`,
              },
            ],
          };
        }
        const targetName = nameBySource.get(target)!;
        let path = relative(dirname(importerName), targetName) + outExt;
        if (!path.startsWith(".")) path = `./${path}`;
        return { path, external: true };
      });

      build.onEnd((result) => {
        for (const file of result.outputFiles ?? []) {
          if (!file.path.endsWith(outExt)) continue;
          const name = relative(
            resolve(build.initialOptions.outdir ?? "dist"),
            file.path,
          ).slice(0, -outExt.length);
          const source = sourceByName.get(name);
          if (!source) continue;
          if (!USE_CLIENT.test(readFileSync(source, "utf8"))) continue;
          const text = file.text;
          if (text.startsWith('"use client";\n')) continue;
          // esbuild keeps an entry's own directive but, for CJS, places it
          // after "use strict". Hoist it to line 1 (same line count, so the
          // source map stays valid).
          const lines = text.split("\n");
          const at = lines.slice(0, 5).findIndex((l) => /^["']use client["'];?$/.test(l));
          if (at > 0) {
            lines.splice(at, 1);
            lines.unshift('"use client";');
            file.contents = Buffer.from(lines.join("\n"));
            continue;
          }
          file.contents = Buffer.from(`"use client";\n${text}`);
          // Keep the sibling source map aligned with the one added line.
          const map = result.outputFiles!.find((f) => f.path === `${file.path}.map`);
          if (map) {
            const json = JSON.parse(map.text);
            json.mappings = `;${json.mappings}`;
            map.contents = Buffer.from(JSON.stringify(json));
          }
        }
      });
    },
  };
}

export default defineConfig({
  entry,
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: false, // build:css writes dist/styles.css first; `build` wipes dist up front
  splitting: false,
  treeshake: false,
  external: ["react", "react-dom"],
  esbuildPlugins: [kitModulesPlugin()],
});
