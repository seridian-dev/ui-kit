// Adapted from Magic UI's Aurora Text (MIT, github.com/magicuidesign/magicui),
// verified against the real upstream source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/aurora-text.tsx
// (fetched directly, not reconstructed from docs). Public API/props unchanged.
//
// Deviations from upstream: `data-slot="aurora-text"` (root) and
// `data-slot="aurora-text-gradient"` (animated span) added; className merging
// switched from a template literal to this kit's `cn()` helper (same output,
// proper merge). The default `colors` gradient stops (#FF0080, #7928CA,
// #0070F3, #38bdf8) are KEPT verbatim — they are the aurora effect's visual
// identity and have no Astryx token equivalents (per marquee.tsx precedent).
// "use client" kept as upstream ships it (the component is hook-free, but
// upstream marks it client-side).
//
// CSS AUDIT: uses the `animate-aurora` utility, whose keyframes are NOT yet
// registered in src/styles/globals.css. The exact registration CSS lives in
// this component's own registry entry
// (apps/www/public/r/aurora-text.json, `cssVars`/`css` blocks) and must be
// added to the `@theme` block + keyframes there.
"use client"

import { memo, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface AuroraTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    }

    return (
      <span data-slot="aurora-text" className={cn("relative inline-block", className)}>
        <span className="sr-only">{children}</span>
        <span
          data-slot="aurora-text-gradient"
          className="animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
