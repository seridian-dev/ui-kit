# @bytecats/ui-kit

A shared React component library for bytecats' small products — one kit,
many repos, instead of re-solving buttons and dialogs in every new app.

It combines two upstream open-source projects:

- **[shadcn/ui](https://ui.shadcn.com)** (MIT) — the component layer: accessible
  Radix-based primitives, composed as plain, ownable React + Tailwind source
  you copy into your own repo rather than a black-box npm dependency.
- **[Astryx](https://github.com/facebook/astryx)** (MIT, Meta Platforms, Inc.) —
  the design-token layer: verified color, radius, and typography values
  pulled from Astryx's real published theme packages.

Astryx itself is a React + [StyleX](https://stylexjs.com) design system —
this kit does **not** install the `astryx` package or run StyleX at runtime.
Running two live CSS engines (Tailwind + StyleX) in one component library
would be a mess for consumers. Instead, this kit takes Astryx's **verified
design tokens only** (the actual `dist/theme.css` values from
`@astryxdesign/theme-neutral` and `@astryxdesign/theme-stone` on npm) and
wires them into Tailwind v4's CSS-variable theme layer, which is the
mechanism shadcn/ui itself already expects. shadcn/ui supplies the
components and interaction model; Astryx supplies the look.

## Install

Not published to npm yet — install straight from GitHub:

```bash
bun add github:4cecoder/ui-kit
```

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@bytecats/ui-kit";
import "@bytecats/ui-kit/styles.css"; // once, at your app root

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

That single `styles.css` import is all a consuming app needs — it's a fully
compiled Tailwind v4 stylesheet (base layer, component utility classes, and
theme tokens), so **consuming apps do not need Tailwind installed at all**.
This is the correct shape for a Tailwind v4 component library: ship compiled
CSS, not a Tailwind preset/plugin for the consumer to wire up themselves.
(A preset-based approach only makes sense if you want consumers to
re-theme/purge against their own class usage — not the goal here.)

See [`src/demo.tsx`](./src/demo.tsx) for a slightly larger example.

## Components included

A curated general-purpose set — not shadcn's full catalog, not Astryx's
150+ components. These are the primitives nearly every small product repo
ends up needing:

`Alert`, `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Dialog`,
`DropdownMenu`, `Input`, `Label`, `RadioGroup`, `Select`, `Separator`,
`Skeleton`, `Switch`, `Table`, `Tabs`, `Textarea`, `Tooltip`.

Deliberately left out for now: anything more app-shell-shaped (sidebar,
command palette, data-heavy chart/table widgets, forms-library bindings) —
those are product-specific enough that pulling them in here would bias the
kit toward one app's opinions. Add them with the shadcn CLI as a specific
product needs them (see "Adding more components" below); they'll pick up
this kit's Astryx theming automatically since they share the same CSS
variables.

## Theming & dark mode

Two verified Astryx themes ship today:

- **`neutral`** (default) — restrained warm grays, minimal and quiet.
- **`stone`** — warm stone and slate, earthy and understated.

Switch themes with a single HTML attribute, no JS or rebuild required:

```html
<html data-ui-theme="stone">
```

Omit the attribute (or use `data-ui-theme="neutral"`) for the default.

**Dark mode is automatic and requires no toggle, no `.dark` class, and no
JavaScript.** Every Astryx color token is wired through CSS's `light-dark()`
function exactly as Astryx itself ships them, and `color-scheme: light dark`
is set on `:root`. The browser picks light or dark based on the user's OS/
browser preference (`prefers-color-scheme`) automatically. Tailwind v4's
`dark:` utility variant is left at its default (`@media
(prefers-color-scheme: dark)`) so both the CSS variables and any `dark:`
utility classes inside components stay in sync — there's no `.dark` class
to toggle in the first place, so there's nothing for app code to get out of
sync with.

## Where the token values come from

Per-instructions, token values were **not** taken from docs pages or blog
summaries. They were pulled directly from the real published npm tarballs:

```bash
npm pack @astryxdesign/theme-neutral@0.1.7
npm pack @astryxdesign/theme-stone@0.1.7
npm pack @astryxdesign/core@0.1.7
```

...then extracted and read straight out of each package's own generated
`dist/theme.css` (and `dist/astryx.css` for the shared spacing scale).
Every value in [`src/styles/globals.css`](./src/styles/globals.css) is
copied verbatim from those files — see the source comments in that file for
the exact package + version cited next to each block.

Both `@astryxdesign/theme-neutral@0.1.7` and `@astryxdesign/theme-stone@0.1.7`
are MIT-licensed, Copyright (c) 2026 Meta Platforms, Inc. — confirmed by
reading each package's own `LICENSE` file inside the tarball (not assumed).
The [facebook/astryx](https://github.com/facebook/astryx) repository itself
is also MIT-licensed. See [`LICENSE`](./LICENSE) for full attribution.

Astryx also publishes `theme-butter`, `theme-chocolate`, `theme-matcha`,
`theme-gothic`, and `theme-y2k` — all real, all MIT, and all could be added
the same way if a product needs a different visual identity.

## Adding more components

This repo keeps `components.json` around, so the shadcn CLI still works
directly against it:

```bash
bunx shadcn@latest add <component> --cwd .
```

New components land in `src/components/ui/`; re-export them from
`src/index.ts` and rebuild.

## Building

```bash
bun install
bun run build   # compiles src/styles/globals.css -> dist/styles.css (Tailwind v4 CLI),
                 # then bundles src/index.ts -> dist/{index.js,index.cjs,index.d.ts} (tsup)
```

`react` and `react-dom` are peer dependencies — this package does not bundle
them.

## Attribution

- Component source in `src/components/ui/` is generated by and derived from
  the [shadcn/ui](https://ui.shadcn.com) registry (MIT, Copyright (c) 2023
  shadcn), via `bunx shadcn@latest add`, then wired to Astryx-sourced theme
  tokens instead of shadcn's stock palette.
- Design tokens in `src/styles/globals.css` are sourced from
  [Meta's Astryx design system](https://github.com/facebook/astryx) (MIT,
  Copyright (c) 2026 Meta Platforms, Inc.), specifically the
  `@astryxdesign/theme-neutral` and `@astryxdesign/theme-stone` npm
  packages.

This project is not affiliated with or endorsed by shadcn or Meta.

## License

MIT — see [LICENSE](./LICENSE).
