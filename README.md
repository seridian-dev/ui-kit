# @seridian/ui-kit

A shared React component library for Seridian's small products — one kit,
many repos, instead of re-solving buttons and dialogs in every new app.

It combines three upstream open-source projects:

- **[shadcn/ui](https://ui.shadcn.com)** (MIT) — the component layer: accessible
  Radix-based primitives, composed as plain, ownable React + Tailwind source
  you copy into your own repo rather than a black-box npm dependency.
- **[Astryx](https://github.com/facebook/astryx)** (MIT, Meta Platforms, Inc.) —
  the design-token layer: verified color, radius, and typography values
  pulled from Astryx's real published theme packages.
- **[Magic UI](https://magicui.design)** (MIT,
  [magicuidesign/magicui](https://github.com/magicuidesign/magicui)) — a
  small, curated set of animated components (marquee, shimmer button,
  animated beam, ...) layered on top of the same shadcn/ui + Tailwind
  conventions, animated with [Motion](https://motion.dev).

Alongside those three, fifteen components are clean-room builds: original
implementations written against the publicly documented behavior of other
projects' components, with no upstream source viewed or copied — see
"Clean-room builds" below — and a further set are vendored outright from
other MIT-licensed component projects, adapted from their real source —
see "Vendored components" below.

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

Install from npm:

```bash
bun add @seridian/ui-kit
# or
npm install @seridian/ui-kit
pnpm add @seridian/ui-kit
yarn add @seridian/ui-kit
```

Or install directly from the public GitHub repository:

```bash
bun add github:seridian-dev/ui-kit
```

No SSH keys, deploy keys, or tokens are needed — both npm and this repo
are public, so local installs and CI/CD (GitHub Actions, Netlify, Vercel,
etc.) work seamlessly out of the box.

`dist/` is committed to this repo specifically so this works: a git-based
install doesn't run a build step, and bun blocks the `prepare` lifecycle
script by default on any dependency it doesn't already trust (`bun pm
untrusted` / `bun pm trust` — verified this actually happens on a fresh
install). If `dist/` weren't committed, a git install would silently give
you a package with no compiled output.

## Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@seridian/ui-kit";
import "@seridian/ui-kit/styles.css"; // once, at your app root

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
150+ components, not Magic UI's 150+ effects. These are the primitives
nearly every small product repo ends up needing, plus a small set of
genuinely common gaps against Astryx's real catalog, a curated set of
well-adapted Magic UI effects, a set of clean-room builds covering
gaps other registries have proven people want, and a set vendored
outright from other MIT-licensed component registries. Grouped by what
they're for; provenance is marked inline — unmarked means shadcn/ui-derived
core, *(hand-built)* means no shadcn equivalent exists, *(Magic UI)* means
an animated component from Magic UI (see "Magic UI" below), and
*(clean-room)* means an original implementation written against the
publicly documented behavior of another project's component, with no
upstream source viewed or copied (see "Clean-room builds" below), and
*(vendored)* means code adapted from a real upstream MIT project's source,
with an attribution header in each file citing the exact upstream URL
fetched (see "Vendored components" below).

**Actions:**
`Button`, `Kbd`/`KbdGroup` *(hand-built)*,
`SegmentedControl`/`SegmentedControlItem` *(hand-built)*, `Toggle`,
`ToggleGroup`, `Toolbar` *(clean-room)*.

**Forms & inputs:**
`Calendar`, `Checkbox`, `ColorPicker` (react-colorful) *(clean-room)*,
`Combobox` *(clean-room)*, `DatePickerField` *(vendored)*,
`DateRangePickerField` *(vendored)*, `Dropzone` *(clean-room)*,
`Editor` (Tiptap) *(clean-room)*, `Input`, `InputGroup`,
`InputOTP` (input-otp), `Label`, `NumberField` *(clean-room)*,
`PasswordStrengthInput` *(vendored)*, `RadioGroup`,
`RatingInput` *(vendored)*, `Select`, `Slider`, `Switch`, `Textarea`.

**Layout & structure:**
`Accordion`, `BentoGrid`/`BentoCard` *(Magic UI)*, `Card`, `Collapsible`,
`DirectionAwareTabs` *(vendored)*, `ScrollArea`, `Separator`,
`SortableList` *(vendored)*, `Table`, `Tabs`, `Tree` *(clean-room)*.

**Overlays & menus:**
`AlertDialog`, `Command`, `ContextMenu`, `Dialog`, `Drawer` (Vaul),
`DynamicIsland` *(vendored)*, `DropdownMenu`, `HoverCard`,
`ImageZoom` *(clean-room)*, `Menubar`, `Popover`, `Sheet`,
`StickyBanner` *(vendored)*, `Tooltip`.

**Navigation:**
`Breadcrumb`, `Dock` *(vendored)*, `NavigationMenu`,
`Onboarding` *(vendored)*, `Pagination`, `Stepper` *(vendored)*.

**Data display:**
`BrowserMockup` *(vendored)*, `CodeBlock` *(vendored)*,
`CompareSlider` *(vendored)*, `ContributionGraph` *(clean-room)*,
`Flag` (flag-icons) *(clean-room)*, `IPhoneMockup` *(vendored)*,
`QRCode` (qrcode) *(clean-room)*, `Snippet` *(clean-room)*,
`Terminal` *(vendored)*, `Timeline` *(vendored)*.

**Feedback & status:**
`Alert`, `AnimatedCircularProgressBar` *(Magic UI)*, `Avatar`,
`AvatarCircles` *(Magic UI)*, `Badge`, `EmptyState` *(hand-built)*,
`Meter` *(clean-room)*, `Progress`, `RelativeTime` *(clean-room)*,
`Skeleton`, `Spinner` *(clean-room)*, `Timer` *(vendored)*,
`Toaster` (Sonner).

**Motion & effects (all Magic UI):**
`AnimatedBeam`, `AnimatedGridPattern`, `AnimatedList`, `AnimatedShinyText`,
`AuroraText`, `BlurFade`, `BorderBeam`, `Confetti`/`ConfettiButton`,
`DotPattern`, `GridPattern`, `HyperText`, `MagicCard`, `Marquee`, `Meteors`,
`NumberTicker`, `OrbitingCircles`, `ProgressiveBlur`, `Ripple`,
`ScrollProgress`, `ShimmerButton`, `TypingAnimation`, `WordRotate`.

Deliberately left out for now: anything more app-shell-shaped (sidebar,
charts, data-table widgets like TanStack Table, forms-library bindings) —
the kit has grown considerably, rich-text editor included, but those remain
product-specific enough that pulling them in here would bias it
toward one app's opinions. Add them with the shadcn CLI as a specific
product needs them (see "Adding more components" below); they'll pick up
this kit's Astryx theming automatically since they share the same CSS
variables.

## Magic UI

A curated slice of [Magic UI](https://github.com/magicuidesign/magicui)
(MIT) — not all 150+ of its components, just the ones broadly useful in a
general-purpose product kit rather than landing-page-specific:
`AnimatedBeam`, `AnimatedCircularProgressBar`, `AnimatedGridPattern`,
`AnimatedList`, `AnimatedShinyText`, `AuroraText`, `AvatarCircles`,
`BentoGrid`/`BentoCard`, `BlurFade`, `BorderBeam`, `Confetti`/
`ConfettiButton`, `DotPattern`, `GridPattern`, `HyperText`, `MagicCard`,
`Marquee`, `Meteors`, `NumberTicker`, `OrbitingCircles`, `ProgressiveBlur`,
`Ripple`, `ScrollProgress`, `ShimmerButton`, `TypingAnimation`,
`WordRotate`. Each was pulled from Magic UI's real registry source (not
reconstructed from docs) and adapted to this kit's conventions
— `cn()`, `data-slot` attributes, and Astryx theme CSS variables in place of
Magic UI's hardcoded colors where the component has themeable colors. See
the attribution comment at the top of each component file in
`src/components/ui/` for the exact upstream URL fetched.

These components pull in [`motion`](https://motion.dev) (the current
`framer-motion` successor package — the real Magic UI source imports from
`motion/react`, confirmed by reading it directly rather than assumed) and,
for `Confetti`, `canvas-confetti`. On the shadcn side, `Drawer` pulls in
Vaul and `InputOTP` pulls in `input-otp` — both the shadcn registry's own
official dependency choices. All of these are real runtime dependencies of
this kit. The clean-room builds (see below) bring a few more — Tiptap,
`qrcode`, and `react-colorful` — each with its license and
reasoning described under "Clean-room builds". The vendored components
(see below) bring two more, both tiny: `react-use-measure` and
`@radix-ui/react-use-controllable-state` — used by `SortableList`,
`DirectionAwareTabs`, and `Onboarding`.

## Clean-room builds

Fifteen components in this kit are **clean-room builds**: original
implementations written against the *publicly documented behavior* of
another project's component — its props, events, and observable output —
with no upstream source viewed or copied. The behavior is the
inspiration; every line of code is written for this kit, on this kit's
conventions.

Why clean-room instead of lifting source the way the Magic UI components
were lifted? Upstream licensing varies in both directions. Some projects
license their code with strings this kit won't accept (Coss UI's successor
repository is AGPL), and some component registries carry usage
restrictions that go beyond what their licenses say. Referencing behavior
is fine; copying source isn't — so only behavior is referenced. Where an
implementation needed a real engine underneath, the engine is a
standalone, permissively licensed library:

- `Editor` builds on [Tiptap](https://tiptap.dev) (MIT) — the same engine
  EditorCN uses — with the toolbar composed from this kit's own
  primitives rather than anyone's editor chrome.
- `QRCode` renders through the
  [`qrcode`](https://github.com/soldair/node-qrcode) package (MIT).
- `ColorPicker` gets its color math from
  [react-colorful](https://github.com/omgovich/react-colorful) (MIT).
- `Flag` renders clean ISO 3166-1 alpha-2 country flags using vector
  assets sourced from [`flag-icons`](https://flagicons.lipis.dev)
  (MIT; flag artwork by Panayiotis Lipiridis) loaded on demand — no broken
  relative path dependencies or bundler crashes in Next.js/Turbopack.

Which clean-room component took its behavioral cue from where:

- **[Kibo UI](https://www.kibo-ui.com)** — `Tree`, `Dropzone`, `Snippet`,
  `Spinner`, `RelativeTime`, `QRCode`, `ColorPicker`, `ImageZoom`,
  `ContributionGraph`.
- **[Dice UI](https://diceui.com)** — `Combobox` (single- and
  multi-select, composed on this kit's existing `Command` + `Popover`
  primitives).
- **[EditorCN](https://github.com/shadcn-labs/editorcn)** — `Editor`,
  built directly on Tiptap.
- **[Flagcn](https://flagcn.dev)** — `Flag`, as a wrapper around
  `flag-icons`.
- **[Coss UI](https://coss.com/ui)** — `Meter`, `Toolbar`, `NumberField`
  (Coss builds on Base UI; this kit's versions are rebuilt on the same
  Radix primitives as the rest of the kit — inspiration only, no code).

## Vendored components

The other additions to this kit are **vendored** rather than clean-room
built — the one-line policy difference is that these ARE upstream code:
pulled from real, MIT-licensed component projects and adapted to this
kit's conventions, instead of being rewritten from documented behavior
alone. Every vendored file's header comment cites the exact upstream URL
fetched, and all three sources were verified MIT by reading their LICENSE
files directly (not assumed):

- **[Origin UI](https://github.com/shadcn/originui)** (MIT) —
  `DatePickerField`, `DateRangePickerField`, `PasswordStrengthInput`,
  `RatingInput`, `Timeline`. Pulled from the frozen MIT `shadcn/originui`
  fork specifically: Origin UI's live successor at coss.com is
  AGPL-licensed, which is why the fork — not the live site — is the
  canonical source for this kit.
- **[Velora UI](https://github.com/ColorlibHQ/velora-ui)** (MIT,
  Copyright Aigars Silkalns) — `BrowserMockup`, `CompareSlider`, `Dock`,
  `IPhoneMockup`, `StickyBanner`, `Stepper`, `Terminal`.
- **[Cult UI](https://github.com/nolly-studio/cult-ui)** (MIT,
  Copyright Jordan-Gilliam; `nolly-studio/cult-ui` is the project's sole
  surviving repository) — `CodeBlock`, `DirectionAwareTabs`,
  `DynamicIsland`, `Onboarding`, `SortableList`, `Timer`.

Where a source offered something this kit already ships, it was skipped on
purpose rather than vendored twice: Origin UI's `MultipleSelector` is
superseded by this kit's `Combobox`, and Cult UI also ships a dock —
Velora's took that slot.

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
  packages. `EmptyState`, `Kbd`/`KbdGroup`, and
  `SegmentedControl`/`SegmentedControlItem` have no shadcn equivalent and
  were hand-built for this kit; their prop shapes were informed by reading
  Astryx's own component source for the same components (cited in each
  file's header comment), not copied — Astryx ships those as React +
  StyleX, this kit ships them as plain Tailwind components.
- The Magic UI components in `src/components/ui/` — `AnimatedBeam`,
  `AnimatedCircularProgressBar`, `AnimatedGridPattern`, `AnimatedList`,
  `AnimatedShinyText`, `AuroraText`, `AvatarCircles`, `BentoGrid`/
  `BentoCard`, `BlurFade`, `BorderBeam`, `Confetti`/`ConfettiButton`,
  `DotPattern`, `GridPattern`, `HyperText`, `MagicCard`, `Marquee`,
  `Meteors`, `NumberTicker`, `OrbitingCircles`, `ProgressiveBlur`,
  `Ripple`, `ScrollProgress`, `ShimmerButton`, `TypingAnimation`,
  `WordRotate` — are adapted from
  [Magic UI](https://github.com/magicuidesign/magicui) (MIT), pulled
  directly from its real registry source and re-themed to this kit's
  Astryx CSS variables (see "Magic UI" above and each file's header
  comment for the exact upstream source fetched).
- The clean-room components in `src/components/ui/` — `Tree`, `Dropzone`,
  `Snippet`, `Spinner`, `RelativeTime`, `QRCode`, `ColorPicker`,
  `ImageZoom`, and `ContributionGraph` (behavior inspired by
  [Kibo UI](https://www.kibo-ui.com)); `Combobox`
  ([Dice UI](https://diceui.com)); `Editor`
  ([EditorCN](https://github.com/shadcn-labs/editorcn)); `Flag`
  ([Flagcn](https://flagcn.dev)); and `Meter`, `Toolbar`, and
  `NumberField` ([Coss UI](https://coss.com/ui)) — are original
  implementations for this kit, written against the publicly documented
  behavior of those projects' components. **No upstream source was viewed
  or copied.** Engine credits: [Tiptap](https://tiptap.dev) (MIT) under
  `Editor`, [`qrcode`](https://github.com/soldair/node-qrcode) (MIT) under
  `QRCode`, [react-colorful](https://github.com/omgovich/react-colorful)
  (MIT) under `ColorPicker`, and
  [`flag-icons`](https://flagicons.lipis.dev) (MIT, flag artwork by
  Panayiotis Lipiridis) under `Flag`.
- The vendored components in `src/components/ui/` — `DatePickerField`,
  `DateRangePickerField`, `PasswordStrengthInput`, `RatingInput`, and
  `Timeline` from [Origin UI](https://github.com/shadcn/originui) (MIT,
  via the frozen MIT `shadcn/originui` fork — the project's live coss.com
  successor is AGPL, which is why the fork is the canonical source);
  `BrowserMockup`, `CompareSlider`, `Dock`, `IPhoneMockup`,
  `StickyBanner`, `Stepper`, and `Terminal` from
  [Velora UI](https://github.com/ColorlibHQ/velora-ui) (MIT, Copyright
  Aigars Silkalns); and `CodeBlock`, `DirectionAwareTabs`,
  `DynamicIsland`, `Onboarding`, `SortableList`, and `Timer` from
  [Cult UI](https://github.com/nolly-studio/cult-ui) (MIT, Copyright
  Jordan-Gilliam, whose sole surviving repository is
  `nolly-studio/cult-ui`) — are adapted directly from those projects'
  real upstream source, with each license verified by reading the
  project's LICENSE file and each file's header comment citing the exact
  upstream URL fetched (see "Vendored components" above).

This project is not affiliated with or endorsed by shadcn, Meta, Magic UI,
Origin UI, Velora UI, Cult UI, Kibo UI, Dice UI, EditorCN, Flagcn, or
Coss UI.

## License

MIT — see [LICENSE](./LICENSE).
