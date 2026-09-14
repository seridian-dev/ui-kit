// Adapted from Magic UI's Meteors (MIT, github.com/magicuidesign/magicui),
// verified against the real upstream source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/meteors.tsx
// (fetched directly, not reconstructed from docs). Behavior/props are
// unchanged; the component renders a fragment of absolutely-positioned
// meteor `<span>`s, so `data-slot="meteors"` is applied to each meteor span
// (the component's rendered roots).
//
// Deviations from upstream: `data-slot="meteors"` / `data-slot="meteor-tail"`
// added; hardcoded `bg-zinc-500` (meteor head) and `from-zinc-500` (tail
// gradient) replaced with this kit's `bg-muted-foreground` /
// `from-muted-foreground` theme classes so meteors read on both light &
// dark Astryx themes (the faint `#ffffff10` head shadow is intrinsic to the
// effect and kept verbatim). The `animate-meteor` keyframes it depends on
// are registered in src/styles/globals.css, copied from that component's
// registry entry (apps/www/public/r/meteors.json `cssVars`/`css`).
"use client"

import * as React from "react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  )

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          data-slot="meteors"
          style={{ ...style }}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div
            data-slot="meteor-tail"
            className="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-muted-foreground to-transparent"
          />
        </span>
      ))}
    </>
  )
}
