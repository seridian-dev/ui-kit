/**
 * Regenerates package.json "exports" from the module list:
 *   "."            -> dist/index.*            (unchanged)
 *   "./styles.css" -> dist/styles.css         (unchanged)
 *   "./<name>"     -> dist/components/ui/<name>.* for every src/components/ui/*.tsx
 *   "./<name>"     -> dist/lib/<name>.*            for every src/lib/*.ts
 *
 * Usage: bun scripts/sync-exports.ts          (write)
 *        bun scripts/sync-exports.ts --check  (exit 1 if package.json is stale)
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");

type Conditions = { types: string; import: string; require: string };

function entryFor(path: string): Conditions {
  return {
    types: `./dist/${path}.d.ts`,
    import: `./dist/${path}.js`,
    require: `./dist/${path}.cjs`,
  };
}

function modules(dir: string, ext: string): string[] {
  return readdirSync(resolve(root, "src", dir))
    .filter((f) => f.endsWith(ext))
    .map((f) => f.slice(0, -ext.length))
    .sort();
}

export function expectedExports(): Record<string, unknown> {
  const subpaths: Record<string, Conditions> = {};
  const add = (name: string, path: string) => {
    if (subpaths[`./${name}`]) throw new Error(`Duplicate subpath ./${name}`);
    subpaths[`./${name}`] = entryFor(path);
  };
  for (const name of modules("lib", ".ts")) add(name, `lib/${name}`);
  for (const name of modules("components/ui", ".tsx")) add(name, `components/ui/${name}`);

  return {
    ".": entryFor("index"),
    "./styles.css": "./dist/styles.css",
    "./package.json": "./package.json",
    ...Object.fromEntries(Object.entries(subpaths).sort(([a], [b]) => a.localeCompare(b))),
  };
}

if (import.meta.main) {
  const pkgPath = resolve(root, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const next = expectedExports();
  const stale = JSON.stringify(pkg.exports) !== JSON.stringify(next);
  if (process.argv.includes("--check")) {
    if (stale) {
      console.error("package.json exports are stale; run `bun scripts/sync-exports.ts`");
      process.exit(1);
    }
  } else if (stale) {
    pkg.exports = next;
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
    console.log(`package.json exports updated (${Object.keys(next).length} entries)`);
  }
}
