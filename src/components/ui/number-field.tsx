// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Coss UI's
// Number Field (https://coss.com/ui) — "a numeric input element with
// increment and decrement buttons" — no upstream source code was viewed or
// copied. Rebuilt on this kit's Radix-based conventions.
//
// Coss wraps Base UI's NumberField; this kit has no Radix number-field
// primitive, so the state machine is hand-rolled: controlled or uncontrolled
// numeric value, clamping to [min, max], step-sized increment/decrement
// (buttons + ArrowUp/ArrowDown), free typing with parse-on-blur (invalid or
// empty text reverts to the last valid value), a size context
// (sm/default/lg), disabled/readOnly, an optional `name` (hidden input) for
// form submission, and an optional `format` for display (e.g. currency).
// NumberField root is a context provider, not a DOM element — Base UI's
// Root likewise renders no wrapper. Composition mirrors the documented API:
// NumberFieldGroup (bordered input-group-style container), NumberFieldInput,
// NumberFieldDecrement, NumberFieldIncrement.
//
// Deliberate simplification: Base UI's drag-to-scrub area is not implemented
// (pointer-drag gesture state with no bearing on the value semantics); the
// buttons and arrow keys cover the documented stepping behavior.
//
// Beyond existing globals.css animations: none needed (CSS transition only).
"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type NumberFieldContextValue = {
  value: number | undefined
  text: string
  size: "sm" | "default" | "lg"
  disabled: boolean
  readOnly: boolean
  min: number
  max: number
  setText: (text: string) => void
  commit: (text: string) => void
  step: (direction: 1 | -1) => void
}

const NumberFieldContext = React.createContext<NumberFieldContextValue | null>(
  null
)

function useNumberFieldContext(consumer: string) {
  const context = React.useContext(NumberFieldContext)
  if (!context) {
    throw new Error(`<${consumer}> must be used within <NumberField>`)
  }
  return context
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

// Trim float noise from step arithmetic (0.1 + 0.2 → 0.3, not
// 0.30000000000000004).
function snap(value: number) {
  return Number(value.toPrecision(12))
}

function NumberField({
  value: valueProp,
  defaultValue,
  onValueChange,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  size = "default",
  disabled = false,
  readOnly = false,
  name,
  format = (value: number) => value.toLocaleString(),
  children,
}: {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number | undefined) => void
  min?: number
  max?: number
  step?: number
  size?: "sm" | "default" | "lg"
  disabled?: boolean
  readOnly?: boolean
  name?: string
  format?: (value: number) => string
  children?: React.ReactNode
}) {
  const safeMax = Math.max(min, max)
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = React.useState<number | undefined>(
    defaultValue
  )
  const value = isControlled ? valueProp : internalValue
  const [text, setText] = React.useState(() =>
    value === undefined ? "" : format(value)
  )
  const lastSeen = React.useRef<number | undefined>(value)

  const update = React.useCallback(
    (next: number | undefined) => {
      if (!isControlled) {
        setInternalValue(next)
      }
      lastSeen.current = next
      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  // Keep the visible text in sync when the value is changed from outside.
  React.useEffect(() => {
    if (value !== lastSeen.current) {
      lastSeen.current = value
      setText(value === undefined ? "" : format(value))
    }
  }, [value, format])

  const commit = React.useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      if (trimmed === "" || trimmed === "-" || trimmed === ".") {
        setText("")
        update(undefined)
        return
      }
      const parsed = Number(trimmed)
      if (!Number.isFinite(parsed)) {
        setText(value === undefined ? "" : format(value))
        return
      }
      const next = snap(clamp(parsed, min, safeMax))
      setText(format(next))
      update(next)
    },
    [format, min, safeMax, update, value]
  )

  const stepBy = React.useCallback(
    (direction: 1 | -1) => {
      if (disabled || readOnly) {
        return
      }
      const base = value ?? clamp(0, min, safeMax)
      const next = snap(clamp(base + direction * step, min, safeMax))
      if (next === value) {
        return
      }
      setText(format(next))
      update(next)
    },
    [disabled, format, min, safeMax, readOnly, step, update, value]
  )

  return (
    <NumberFieldContext.Provider
      value={{
        value,
        text,
        size,
        disabled,
        readOnly,
        min,
        max: safeMax,
        setText,
        commit,
        step: stepBy,
      }}
    >
      {name != null && (
        <input
          type="hidden"
          name={name}
          value={value === undefined ? "" : String(value)}
          disabled={disabled}
        />
      )}
      {children}
    </NumberFieldContext.Provider>
  )
}

function NumberFieldGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { size, disabled } = useNumberFieldContext("NumberFieldGroup")
  return (
    <div
      role="group"
      data-slot="number-field-group"
      data-size={size}
      data-disabled={disabled ? "" : undefined}
      className={cn(
        "group/number-field flex h-8 w-full min-w-0 items-center gap-0.5 rounded-lg border border-input px-1 transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-disabled:bg-input/50 data-disabled:opacity-50 dark:bg-input/30 dark:data-disabled:bg-input/80 data-[size=sm]:h-7 data-[size=lg]:h-9",
        className
      )}
      {...props}
    />
  )
}

function NumberFieldStepper({
  direction,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "variant"> & {
  direction: 1 | -1
}) {
  const { step, disabled, readOnly, value, min, max } = useNumberFieldContext(
    "NumberFieldStepper"
  )
  const outOfRange =
    direction === -1
      ? value !== undefined && value <= min
      : value !== undefined && value >= max

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      disabled={disabled || readOnly || outOfRange}
      aria-label={direction === -1 ? "Decrease" : "Increase"}
      onClick={() => step(direction)}
      className={cn("shrink-0 text-muted-foreground hover:text-foreground", className)}
      {...props}
    >
      {children ?? (direction === -1 ? <MinusIcon /> : <PlusIcon />)}
    </Button>
  )
}

function NumberFieldDecrement(
  props: React.ComponentProps<typeof Button>
) {
  return <NumberFieldStepper direction={-1} {...props} />
}

function NumberFieldIncrement(props: React.ComponentProps<typeof Button>) {
  return <NumberFieldStepper direction={1} {...props} />
}

function NumberFieldInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const { text, setText, commit, step, disabled } = useNumberFieldContext(
    "NumberFieldInput"
  )
  return (
    <Input
      type="text"
      inputMode="decimal"
      data-slot="number-field-input"
      value={text}
      disabled={disabled}
      onChange={(event) => setText(event.target.value)}
      onBlur={(event) => commit(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "ArrowUp") {
          event.preventDefault()
          step(1)
        } else if (event.key === "ArrowDown") {
          event.preventDefault()
          step(-1)
        }
      }}
      className={cn(
        "h-full flex-1 border-0 bg-transparent px-1 text-center text-sm tabular-nums shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
}
