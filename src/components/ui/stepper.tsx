// Adapted from Velora UI's Stepper (MIT, github.com/ColorlibHQ/velora-ui),
// verified against the real upstream source at
// https://raw.githubusercontent.com/ColorlibHQ/velora-ui/main/src/components/velora/stepper.tsx
// (fetched directly, not reconstructed). Behavior/props are unchanged;
// adapted to this kit's conventions.
//
// Deviations from upstream:
// - Velora's `--brand` / `--brand-from` / `--brand-to` tokens mapped to this
//   kit's `--color-primary`: completed markers `border-brand bg-brand
//   text-brand-foreground` → `border-primary bg-primary
//   text-primary-foreground`, active marker `border-brand text-brand` →
//   `border-primary text-primary`, and the track fill's brand gradient
//   `from-brand-from to-brand-to` → `from-primary to-primary/60` (this kit
//   has no separate brand-shade tokens, so the fill fades primary to 60%
//   alpha to keep the directional left-to-right gradient).
// - `data-slot` added to the track, track fill, step wrapper, step trigger
//   and step label (upstream only marked the root).
"use client"

import { useReducedMotion, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface StepperProps {
  steps: string[]
  /** Zero-based index of the step in progress */
  current: number
  /** Make completed steps clickable */
  onStepClick?: (index: number) => void
  className?: string
}

/**
 * Horizontal progress indicator for multi-step forms and checkouts.
 * The connecting bar fills as steps complete.
 */
function Stepper({ steps, current, onStepClick, className }: StepperProps) {
  const reducedMotion = useReducedMotion()
  const progress = steps.length > 1 ? current / (steps.length - 1) : 0

  return (
    <ol
      data-slot="stepper"
      className={cn("relative flex w-full justify-between", className)}
    >
      {/* Track sits behind the markers, inset by half a marker at each end. */}
      <div
        aria-hidden
        data-slot="stepper-track"
        className="absolute top-4 right-4 left-4 -z-10 h-0.5 bg-border"
      >
        <motion.div
          data-slot="stepper-track-fill"
          initial={false}
          animate={{ scaleX: progress }}
          transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
          className="h-full origin-left bg-gradient-to-r from-primary to-primary/60"
        />
      </div>

      {steps.map((step, i) => {
        const done = i < current
        const active = i === current
        const interactive = Boolean(onStepClick) && done

        return (
          <li
            key={step}
            data-slot="stepper-step"
            className="flex flex-col items-center gap-2"
          >
            <button
              type="button"
              data-slot="stepper-step-trigger"
              disabled={!interactive}
              onClick={() => onStepClick?.(i)}
              aria-current={active ? "step" : undefined}
              className={cn(
                "grid size-8 place-items-center rounded-full border-2 bg-background text-xs font-medium transition-colors",
                done && "border-primary bg-primary text-primary-foreground",
                active && "border-primary text-primary",
                !done && !active && "border-border text-muted-foreground",
                interactive && "cursor-pointer"
              )}
            >
              {done ? (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M2.5 7.5l3 3 6-6" />
                </svg>
              ) : (
                i + 1
              )}
            </button>
            <span
              data-slot="stepper-step-label"
              className={cn(
                "text-xs whitespace-nowrap",
                active
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {step}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

export { Stepper }

export type { StepperProps }
