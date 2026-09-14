// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Color Picker (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Engine: react-colorful (MIT).
"use client"

import * as React from "react"
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function parseHex(raw: string, allowAlpha: boolean): string | null {
  const bare = raw
    .replace(/^#+/, "")
    .replace(/[^0-9a-fA-F]/g, "")
    .slice(0, allowAlpha ? 8 : 6)
  const isValid = allowAlpha
    ? bare.length === 6 || bare.length === 8
    : bare.length === 6
  if (!isValid) return null
  return `#${bare.toLowerCase()}`
}

interface ColorPickerProps extends React.ComponentProps<"div"> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  presets?: readonly string[]
  enableAlpha?: boolean
  disabled?: boolean
}

function ColorPicker({
  value: controlledValue,
  defaultValue = "#000000",
  onValueChange,
  presets,
  enableAlpha = false,
  disabled = false,
  className,
  ...props
}: ColorPickerProps) {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const current = isControlled ? controlledValue : internalValue

  const [hexDraft, setHexDraft] = React.useState<string | null>(null)
  React.useEffect(() => {
    setHexDraft(null)
  }, [current])

  const commit = React.useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  const Picker = enableAlpha ? HexAlphaColorPicker : HexColorPicker
  const bareHex = current.replace(/^#/, "").toUpperCase()
  const shownHex = hexDraft ?? bareHex

  return (
    <div
      data-slot="color-picker"
      className={cn("inline-flex", className)}
      {...props}
    >
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            type="button"
            variant="outline"
            data-slot="color-picker-trigger"
            aria-label={`Color: ${current}`}
          >
            <span
              aria-hidden="true"
              data-slot="color-picker-swatch"
              className="size-4 shrink-0 rounded-sm border border-border"
              style={{ backgroundColor: current }}
            />
            <span className="font-normal text-muted-foreground tabular-nums">
              {current}
            </span>
            <ChevronDownIcon className="text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" data-slot="color-picker-content">
          <Picker
            color={current}
            onChange={commit}
            className="w-full"
            aria-label="Color saturation and brightness"
          />
          <div className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="text-sm text-muted-foreground"
            >
              #
            </span>
            <Input
              data-slot="color-picker-hex-input"
              value={shownHex}
              maxLength={enableAlpha ? 8 : 6}
              spellCheck={false}
              className="font-mono uppercase"
              onChange={(event) => {
                const bare = event.target.value
                  .replace(/^#+/, "")
                  .replace(/[^0-9a-fA-F]/g, "")
                  .slice(0, enableAlpha ? 8 : 6)
                setHexDraft(bare)
                const parsed = parseHex(bare, enableAlpha)
                if (parsed) commit(parsed)
              }}
              onBlur={() => setHexDraft(null)}
            />
          </div>
          {presets && presets.length > 0 && (
            <div
              data-slot="color-picker-presets"
              className="flex flex-wrap gap-1"
            >
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  data-slot="color-picker-preset"
                  aria-label={`Use color ${preset}`}
                  title={preset}
                  className="size-6 shrink-0 rounded-md border border-border outline-none transition-transform hover:scale-110 focus-visible:ring-3 focus-visible:ring-ring/50"
                  style={{ backgroundColor: preset }}
                  onClick={() => commit(preset)}
                />
              ))}
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { ColorPicker }
export type { ColorPickerProps }
