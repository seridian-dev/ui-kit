// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Coss UI's
// Meter (https://coss.com/ui) — no upstream source code was viewed or
// copied. Rebuilt on this kit's Radix-based conventions.
//
// Coss's Meter is a styled wrapper around Base UI's Meter primitive; this kit
// has no Radix meter primitive, so the parts are plain divs carrying the
// meter ARIA contract (role="meter" + aria-valuemin/max/now). The documented
// compound API is preserved: Meter (root, value/min/max + optional format),
// MeterTrack, MeterIndicator (width derived from the value), MeterLabel and
// MeterValue (renders the formatted value unless children are given). The
// label is visual only — pass aria-label or aria-labelledby on <Meter> for
// assistive naming, or wire MeterLabel's generated id up yourself.
//
// Deliberately not a scalar progress bar: unlike <Progress>, Meter reports a
// static measurement within a known range (storage, rating, bandwidth), so
// value is required and there is no indeterminate state.
//
// Beyond existing globals.css animations: none needed (CSS transition only).
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type MeterContextValue = {
  min: number
  max: number
  value: number
  percent: number
  format: (value: number) => string
}

const MeterContext = React.createContext<MeterContextValue | null>(null)

function useMeterContext(consumer: string) {
  const context = React.useContext(MeterContext)
  if (!context) {
    throw new Error(`<${consumer}> must be used within <Meter>`)
  }
  return context
}

function Meter({
  className,
  value,
  min = 0,
  max = 100,
  format = (formatted: number) => formatted.toLocaleString(),
  ...props
}: React.ComponentProps<"div"> & {
  value: number
  min?: number
  max?: number
  format?: (value: number) => string
}) {
  const safeMax = Math.max(min, max)
  const clamped = Math.min(safeMax, Math.max(min, value))
  const percent = safeMax === min ? 0 : ((clamped - min) / (safeMax - min)) * 100

  return (
    <MeterContext.Provider
      value={{ min, max: safeMax, value: clamped, percent, format }}
    >
      <div
        role="meter"
        aria-valuemin={min}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
        data-slot="meter"
        className={cn("flex w-full min-w-0 flex-col gap-1.5", className)}
        {...props}
      />
    </MeterContext.Provider>
  )
}

function MeterLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const id = React.useId()
  return (
    <span
      id={id}
      data-slot="meter-label"
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

function MeterValue({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  const { value, format } = useMeterContext("MeterValue")
  return (
    <span
      data-slot="meter-value"
      className={cn("text-sm text-muted-foreground tabular-nums", className)}
      {...props}
    >
      {children ?? format(value)}
    </span>
  )
}

function MeterTrack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="meter-track"
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}

function MeterIndicator({ className, ...props }: React.ComponentProps<"div">) {
  const { percent } = useMeterContext("MeterIndicator")
  return (
    <div
      data-slot="meter-indicator"
      className={cn(
        "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
        className
      )}
      style={{ width: `${percent}%` }}
      {...props}
    />
  )
}

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator }
