# AGENTS.md

`@seridian/ui-kit` — single-package React component library (shadcn/ui primitives + Astryx design tokens + curated Magic UI animations). React/react-dom are peer deps, never bundled. Full component catalog and provenance: README.md.

Use Bun for everything — see CLAUDE.md (also symlinked from `.cursor/rules/`). Don't restate it here.

## Commands

```bash
bun install
bun run build       # build:css (Tailwind v4 CLI) THEN build:js (tsup) — order matters
bun run typecheck   # tsc --noEmit
bun test
```

- **Run `bun run build` before `bun test`.** `tests/exports-integrity.test.ts` and `tests/css-regression.test.ts` assert against `dist/` output and fail on a fresh clone or after any `src/` change without a rebuild. CI runs: typecheck → build → test.
- Single file: `bun test tests/css-regression.test.ts`. By name: `bun test -t "pattern"`.
- `bun run dev` is `tsup --watch` — JS only, it does **not** rebuild `dist/styles.css`. Rebuild CSS manually when changing `src/styles/`.

## Hard constraints

- **`dist/` is committed to git on purpose** (see `.gitignore` note and README "Install"): git-based installs run no build step and bun blocks `prepare` scripts, so compiled output must be in the repo. After changing `src/`, rebuild and commit `dist/` too.
- **Don't remove the `"use client"` machinery in `tsup.config.ts`.** esbuild strips `"use client"` during bundling; the `preserveDirectivesPlugin` patches it back or every consuming Next.js App Router app breaks. `treeshake: false` (plugin requirement) and `clean: false` (would wipe the CSS built in the prior step) are deliberate.
- React/react-dom stay external (`tsup.config.ts` `external` + peerDependencies).

## Adding a component

1. `bunx shadcn@latest add <component> --cwd .` — `components.json` maps `@/*` → `src/*`; new files land in `src/components/ui/`.
2. Re-export from `src/index.ts` (the single barrel — tests verify bundle exports).
3. `bun run build`; commit `src/` **and** `dist/`.

Hand-built components follow existing conventions: `cn()` from `@/lib/utils`, `data-slot` attributes, Astryx CSS variables (see any file in `src/components/ui/`).

## Theming rules

- Token values in `src/styles/globals.css` are copied **verbatim** from `@astryxdesign/theme-{neutral,stone}` npm tarballs; inline comments cite the exact package + version per block. Don't invent or "adjust" values.
- Two themes via `<html data-ui-theme="stone">` (default: neutral). Dark mode is automatic via CSS `light-dark()` + `prefers-color-scheme` — **no `.dark` class, no toggle**. Don't add `.dark` variants or toggle plumbing.
- `tests/css-regression.test.ts` fails if `dist/styles.css` contains relative `url(../...)` refs (crashes Turbopack/Next). Relevant when touching Flag/flag-icons styles — flags load on demand, no relative asset paths.

## Licensing policy (provenance)

Every component file's header comment cites its exact upstream source:

- **Vendored** = real upstream MIT code, adapted. Origin UI components must come from the frozen MIT `shadcn/originui` fork — the live coss.com successor is AGPL and is off-limits.
- **Clean-room** = original code written against documented behavior only; never view or copy upstream source (Kibo UI, Dice UI, EditorCN, Flagcn, Coss UI components).
- New third-party code: verify MIT by reading its LICENSE, add the attribution header, update README attribution.

## Release & CI

- CI (`.github/workflows/ci.yml`) runs on push/PR to `master`: typecheck → build → `bun test`.
- **Never `npm publish` locally.** Publishing is triggered by a GitHub Release (`.github/workflows/publish.yml`) and uses OIDC provenance — no NPM_TOKEN exists.
- Version bumps are regular commits (conventional style: `feat:`, `fix:`, `release:`, `ci:`, `docs:`).
