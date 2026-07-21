import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: false, // build:css runs first and writes dist/styles.css — don't wipe it
  splitting: false,
  treeshake: true,
  external: ["react", "react-dom"],
});
