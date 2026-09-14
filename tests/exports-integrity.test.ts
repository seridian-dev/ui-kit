import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import * as SourceExports from "../src/index";

describe("Exports & Bundle Integrity Tests", () => {
  test("dist files exist", () => {
    expect(existsSync(resolve(import.meta.dir, "../dist/index.js"))).toBe(true);
    expect(existsSync(resolve(import.meta.dir, "../dist/index.cjs"))).toBe(true);
    expect(existsSync(resolve(import.meta.dir, "../dist/index.d.ts"))).toBe(true);
  });

  test("core UI primitives are exported from source", () => {
    expect(SourceExports.Button).toBeDefined();
    expect(SourceExports.Badge).toBeDefined();
    expect(SourceExports.Card).toBeDefined();
    expect(SourceExports.Flag).toBeDefined();
    expect(SourceExports.Input).toBeDefined();
    expect(SourceExports.cn).toBeDefined();
  });

  test("ESM bundle exports all expected components", async () => {
    const esmBundle = await import("../dist/index.js");
    expect(esmBundle.Button).toBeDefined();
    expect(esmBundle.Badge).toBeDefined();
    expect(esmBundle.Card).toBeDefined();
    expect(esmBundle.Flag).toBeDefined();
    expect(esmBundle.Input).toBeDefined();
    expect(esmBundle.cn).toBeDefined();
  });

  test("CJS bundle can be required and has exports", () => {
    const cjsBundle = require("../dist/index.cjs");
    expect(cjsBundle.Button).toBeDefined();
    expect(cjsBundle.Badge).toBeDefined();
    expect(cjsBundle.Card).toBeDefined();
    expect(cjsBundle.Flag).toBeDefined();
    expect(cjsBundle.Input).toBeDefined();
    expect(cjsBundle.cn).toBeDefined();
  });
});
