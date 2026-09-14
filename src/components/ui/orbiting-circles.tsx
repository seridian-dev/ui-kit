// Adapted from Magic UI's Orbiting Circles (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream
// source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/orbiting-circles.tsx
// (fetched directly, not reconstructed from docs). Behavior/props are
// unchanged; the component is static JSX (no hooks), so no "use client"
// needed. It renders a fragment (optional orbit path SVG + orbiting item
// divs), so `data-slot="orbiting-circles-path"` / `data-slot="orbiting-circle"`
// are applied to those rendered roots.
//
// Deviations from upstream: `data-slot`s added; hardcoded
// `stroke-black/10 stroke-1 dark:stroke-white/10` (orbit path) replaced with
// this kit's `stroke-foreground/10`, which flips with the Astryx theme in
// light & dark mode exactly like the upstream pair. The `animate-orbit`
// keyframes it depends on are registered in src/styles/globals.css, copied
// from that component's registry entry
// (apps/www/public/r/orbiting-circles.json `cssVars`/`css`).
import * as React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          data-slot="orbiting-circles-path"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-foreground/10 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            data-slot="orbiting-circle"
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
