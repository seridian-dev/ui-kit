"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & {
  /**
   * Accessible name for the thumb at `index`. Needed for multi-thumb
   * sliders whose thumbs mean different things; defaults to `aria-label`
   * ("Price, minimum" / "Price, maximum" for a two-thumb range).
   */
  getAriaLabel?: (index: number) => string
  /** Human-readable value for the thumb at `index`, e.g. "$40". */
  getAriaValueText?: (value: number, index: number) => string
}

function thumbLabel(label: string | undefined, index: number, count: number) {
  if (!label || count === 1) return label
  if (count === 2) return `${label}, ${index === 0 ? "minimum" : "maximum"}`
  return `${label}, ${index + 1} of ${count}`
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  getAriaLabel,
  getAriaValueText,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  onValueChange,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )
  // Latest values for aria-valuetext when the slider is uncontrolled.
  const [uncontrolledValues, setUncontrolledValues] = React.useState(_values)
  const liveValues = Array.isArray(value) ? value : uncontrolledValues
  const handleValueChange = React.useCallback(
    (next: number[]) => {
      setUncontrolledValues(next)
      onValueChange?.(next)
    },
    [onValueChange]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      onValueChange={handleValueChange}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        // The thumb is the element with role="slider", so the accessible
        // name and description go on it, not on the Root wrapper.
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          aria-label={
            getAriaLabel?.(index) ??
            thumbLabel(ariaLabel, index, _values.length)
          }
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-valuetext={
            getAriaValueText && liveValues[index] !== undefined
              ? getAriaValueText(liveValues[index], index)
              : undefined
          }
          className="relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
