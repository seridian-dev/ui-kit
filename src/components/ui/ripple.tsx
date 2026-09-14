// Adapted from Magic UI's Ripple (MIT, github.com/magicuidesign/magicui),
// verified against the real upstream source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/ripple.tsx
// (fetched directly, not reconstructed from docs). Behavior/props are
// unchanged; the component is static JSX + React.memo (no hooks), so no
// "use client" needed.
//
// Deviations from upstream: `data-slot="ripple"` /
// `data-slot="ripple-circle"` added. Upstream already themes the circles
// with `bg-foreground/25` + `borderColor: var(--foreground)`, which map
// 1:1 onto this kit's Astryx tokens, so no color changes were needed. The
// `animate-ripple` keyframes it depends on are registered in
// src/styles/globals.css, copied from that component's registry entry
// (apps/www/public/r/ripple.json `cssVars`/`css`).
import * as React from "react"
import { type ComponentPropsWithoutRef, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      data-slot="ripple"
      className={cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = mainCircleOpacity - i * 0.03
        const animationDelay = `${i * 0.06}s`
        const borderStyle = "solid"

        return (
          <div
            key={i}
            data-slot="ripple-circle"
            className={`animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `var(--foreground)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"
