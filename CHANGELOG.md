# Changelog

All notable changes to `@seridian/ui-kit`.

## 0.6.0

### Per-component modules
- Every `src/components/ui/*.tsx` and `src/lib/*.ts` file now builds to its
  own ESM and CJS module (`dist/components/ui/<name>.{js,cjs,d.ts,d.cts}`,
  `dist/lib/utils.*`). Imports between kit modules stay imports, so nothing
  is bundled twice and there are no shared chunks.
- `dist/index.js` / `dist/index.cjs` only re-export those modules. With
  `"sideEffects": ["**/*.css"]`, bundlers now drop the components an app does
  not use, even when importing from `@seridian/ui-kit`.
- New subpath exports, one per module, generated from the file list:
  `@seridian/ui-kit/button`, `@seridian/ui-kit/dialog`, ...,
  `@seridian/ui-kit/utils`. `.` and `./styles.css` are unchanged.
  `bun run sync:exports` regenerates them; the build fails if they are stale.
- `"use client"` is now per module, exactly where the source has it, instead
  of on the whole bundle. Server-safe components (Card, Badge, Button, ...)
  no longer force a client boundary in Next.js App Router.
- Added `"use client"` to `contribution-graph`, `input-otp`, `magic-card` and
  `toggle-group`, which use hooks or context and previously only worked
  because the single bundle carried the directive.
- The public export list (333 values, 53 types) is identical to 0.5.2.
  `tests/modular-build.test.ts` checks re-export-only entry points, the
  directives, the subpath map and the export surface.

### Theme
- The default theme (`:root` / `data-ui-theme="neutral"`) now uses the
  Seridian Auth identity: paper `#f3f1ed` / ink `#0b0b0f` surfaces, signal
  lime accent (`#c8f04b` on dark, AA-safe `#566b12` on light), Space Grotesk
  and JetBrains Mono font stacks, 0.5rem element radius. Variable names are
  unchanged; only values changed. Stone is unchanged.
- Every text token is at least 4.5:1 on every surface token in both schemes;
  input borders and the focus ring are at least 3:1
  (`tests/theme-contrast.test.ts`).
- The kit does not load fonts; apps load Space Grotesk / JetBrains Mono or
  get the system fallbacks.

### Accessibility
- `Slider`: `aria-label`, `aria-labelledby` and `aria-describedby` now reach
  the thumbs (the `role="slider"` elements) instead of the root wrapper.
  Two-thumb ranges are named "<label>, minimum" / "<label>, maximum". New
  optional `getAriaLabel(index)` and `getAriaValueText(value, index)` props.
- `RatingInput`: each radio is named by its item label; the emoji is
  `aria-hidden`.
