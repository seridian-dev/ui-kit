// Adapted from Magic UI's Animated Circular Progress Bar (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/animated-circular-progress-bar.tsx
// (fetched directly, not reconstructed from docs). Public API/props unchanged
// (`max`, `min`, `value`, `gaugePrimaryColor`, `gaugeSecondaryColor`).
//
// Deviations from upstream: `data-slot="animated-circular-progress-bar"`
// (root), `data-slot="animated-circular-progress-bar-gauge"` (svg) and
// `data-slot="animated-circular-progress-bar-value"` (centered number) added;
// upstream's UMD `React.CSSProperties` type references replaced with an
// explicit `import type { CSSProperties } from "react"` (type-level only).
//
// Colors: none re-themed — the gauge colors are consumer-supplied required
// props (`gaugePrimaryColor`/`gaugeSecondaryColor`); no hardcoded colors ship
// in the component, so consumers can pass this kit's tokens (e.g.
// `var(--color-primary)`).
//
// No "use client": upstream ships without the directive and the component is
// genuinely hook-free (value animation is pure CSS transitions driven by the
// inline `--transition-length`/`--delay` vars; the fading value readout uses
// tw-animate-css `animate-in fade-in`, already imported kit-wide by
// src/styles/globals.css).
//
// CSS AUDIT: none needed — no custom @keyframes; `animate-in fade-in` comes
// from tw-animate-css (already imported in src/styles/globals.css) and the
// circular stroke animation is inline CSS transitions.

import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface AnimatedCircularProgressBarProps {
  max?: number
  min?: number
  value: number
  gaugePrimaryColor: string
  gaugeSecondaryColor: string
  className?: string
}

export function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
}: AnimatedCircularProgressBarProps) {
  const circumference = 2 * Math.PI * 45
  const percentPx = circumference / 100
  const currentPercent = Math.round(((value - min) / (max - min)) * 100)

  return (
    <div
      data-slot="animated-circular-progress-bar"
      className={cn("relative size-40 text-2xl font-semibold", className)}
      style={
        {
          "--circle-size": "100px",
          "--circumference": circumference,
          "--percent-to-px": `${percentPx}px`,
          "--gap-percent": "5",
          "--offset-factor": "0",
          "--transition-length": "1s",
          "--transition-step": "200ms",
          "--delay": "0s",
          "--percent-to-deg": "3.6deg",
          transform: "translateZ(0)",
        } as CSSProperties
      }
    >
      <svg
        data-slot="animated-circular-progress-bar-gauge"
        fill="none"
        className="size-full"
        strokeWidth="2"
        viewBox="0 0 100 100"
      >
        {currentPercent <= 90 && currentPercent >= 0 && (
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-100"
            style={
              {
                stroke: gaugeSecondaryColor,
                "--stroke-percent": 90 - currentPercent,
                "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                strokeDasharray:
                  "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                transform:
                  "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                transition: "all var(--transition-length) ease var(--delay)",
                transformOrigin:
                  "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
              } as CSSProperties
            }
          />
        )}
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-100"
          style={
            {
              stroke: gaugePrimaryColor,
              "--stroke-percent": currentPercent,
              strokeDasharray:
                "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
              transition:
                "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
              transitionProperty: "stroke-dasharray,transform",
              transform:
                "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
              transformOrigin:
                "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)",
            } as CSSProperties
          }
        />
      </svg>
      <span
        data-slot="animated-circular-progress-bar-value"
        data-current-value={currentPercent}
        className="animate-in fade-in absolute inset-0 m-auto size-fit delay-(--delay) duration-(--transition-length) ease-linear"
      >
        {currentPercent}
      </span>
    </div>
  )
}
