/**
 * Lists the public export surface (name + value/type) of a TypeScript entry,
 * resolved through re-exports with the TypeScript checker.
 *
 * Usage: bun scripts/export-surface.ts dist/index.d.ts
 */
import { resolve } from "node:path";
import ts from "typescript";

export function exportSurface(entry: string): string[] {
  const file = resolve(entry);
  const program = ts.createProgram([file], {
    noEmit: true,
    skipLibCheck: true,
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.Preserve,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ESNext,
    allowImportingTsExtensions: true,
    baseUrl: resolve(import.meta.dir, ".."),
    paths: { "@/*": ["./src/*"] },
  });
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(file);
  if (!source) throw new Error(`Cannot load ${entry}`);
  const moduleSymbol = checker.getSymbolAtLocation(source);
  if (!moduleSymbol) return [];
  return checker
    .getExportsOfModule(moduleSymbol)
    .map((symbol) => {
      const target =
        symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
      const kind = target.flags & ts.SymbolFlags.Value ? "value" : "type";
      return `${kind} ${symbol.getName()}`;
    })
    .sort();
}

if (import.meta.main) {
  const entry = process.argv[2];
  if (!entry) {
    console.error("usage: bun scripts/export-surface.ts <entry>");
    process.exit(1);
  }
  console.log(exportSurface(entry).join("\n"));
}
