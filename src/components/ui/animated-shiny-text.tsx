// Adapted from Magic UI's Animated Shiny Text (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/animated-shiny-text.tsx
// (fetched directly, not reconstructed from docs). Public API/props unchanged
// (`shimmerWidth` prop still sets the inline `--shiny-width` CSS var that both
// the gradient sizing and the `shiny-text` keyframes consume, so consumers can
// keep overriding it — that CSS-var override pattern is kept intact).
//
// Deviations from upstream: `data-slot="animated-shiny-text"` added;
// `text-neutral-600/70 dark:text-neutral-400/70` re-themed to this kit's
// `text-muted-foreground` token, and the shine gradient's `via-black/80 …
// dark:via-white/80` stops re-themed to `via-foreground/80` — the kit's
// `--color-foreground` token is already light/dark-aware
// (light-dark(#171717, #fafafa)), so the single stop reproduces upstream's
// light/dark switch without a `dark:` variant.
//
// No "use client": upstream ships without the directive and the component is
// genuinely hook-free (pure CSS animation).
//
// CSS AUDIT: uses the `animate-shiny-text` utility, whose keyframes are NOT
// yet registered in src/styles/globals.css. The exact registration CSS lives
// in this component's own registry entry
// (apps/www/public/r/animated-shiny-text.json, `cssVars`/`css` blocks) and
// must be added to the `@theme` block + keyframes there.

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      data-slot="animated-shiny-text"
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-muted-foreground",

        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        "bg-linear-to-r from-transparent via-foreground/80 via-50% to-transparent",

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
