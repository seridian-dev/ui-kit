// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Dice UI's
// combobox (https://diceui.com) — no upstream source code was viewed or copied.
// Built on this kit's Command (cmdk) + Popover primitives; zero new dependencies.
"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type ComboboxOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

type ComboboxBaseProps = {
  options?: ComboboxOption[]
  disabled?: boolean
  placeholder?: string
  children?: React.ReactNode
}

type ComboboxSingleProps = ComboboxBaseProps & {
  multiple?: false
  value?: string | null
  defaultValue?: string | null
  onValueChange?: (value: string | null) => void
}

type ComboboxMultipleProps = ComboboxBaseProps & {
  multiple: true
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps

type ComboboxContextValue = {
  multiple: boolean
  disabled: boolean
  selected: string[]
  options: ComboboxOption[] | undefined
  placeholder: string | undefined
  toggle: (value: string) => void
  remove: (value: string) => void
  removeLast: () => void
  clear: () => void
  close: () => void
  registerLabel: (value: string, label: React.ReactNode) => void
  getLabel: (value: string) => React.ReactNode
}

const ComboboxContext = React.createContext<ComboboxContextValue | null>(null)

function useCombobox(part: string): ComboboxContextValue {
  const context = React.useContext(ComboboxContext)
  if (!context) {
    throw new Error(`<${part}> must be used within <Combobox>`)
  }
  return context
}

function toArray(value: string | string[] | null | undefined): string[] {
  if (value === null || value === undefined) return []
  return Array.isArray(value) ? value : [value]
}

function Combobox(props: ComboboxProps) {
  const {
    multiple = false,
    options,
    disabled = false,
    placeholder,
    children,
  } = props

  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState<string[]>(() =>
    toArray(props.defaultValue)
  )
  const labelsRef = React.useRef(new Map<string, React.ReactNode>())
  const [, bumpLabels] = React.useReducer((count: number) => count + 1, 0)

  const selected =
    props.value !== undefined ? toArray(props.value) : internalValue

  const setSelected = (next: string[]) => {
    if (props.value === undefined) {
      setInternalValue(next)
    }
    if (props.multiple) {
      props.onValueChange?.(next)
    } else {
      props.onValueChange?.(next[0] ?? null)
    }
  }

  const toggle = (value: string) => {
    if (!multiple) {
      setSelected([value])
      setOpen(false)
      return
    }
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    )
  }

  const remove = (value: string) => {
    setSelected(selected.filter((item) => item !== value))
  }

  const removeLast = () => {
    if (selected.length > 0) {
      setSelected(selected.slice(0, -1))
    }
  }

  const clear = () => {
    setSelected([])
  }

  const registerLabel = React.useCallback(
    (value: string, label: React.ReactNode) => {
      if (labelsRef.current.get(value) === label) return
      labelsRef.current.set(value, label)
      bumpLabels()
    },
    [bumpLabels]
  )

  const getLabel = (value: string): React.ReactNode => {
    const registered = labelsRef.current.get(value)
    if (registered !== undefined) return registered
    return options?.find((option) => option.value === value)?.label ?? value
  }

  return (
    <ComboboxContext.Provider
      value={{
        multiple,
        disabled,
        selected,
        options,
        placeholder,
        toggle,
        remove,
        removeLast,
        clear,
        close: () => setOpen(false),
        registerLabel,
        getLabel,
      }}
    >
      <Popover open={open} onOpenChange={setOpen}>{children}</Popover>
    </ComboboxContext.Provider>
  )
}

function ComboboxTrigger({
  className,
  children,
  disabled,
  ...props
}: React.ComponentProps<typeof Button>) {
  const {
    multiple,
    disabled: rootDisabled,
    selected,
    placeholder,
    getLabel,
    remove,
  } = useCombobox("ComboboxTrigger")
  const isEmpty = selected.length === 0

  return (
    <PopoverTrigger asChild>
      <Button
        type="button"
        variant="outline"
        disabled={disabled || rootDisabled}
        data-slot="combobox-trigger"
        data-placeholder={isEmpty || undefined}
        className={cn(
          "min-h-9 w-full justify-between px-3 font-normal data-placeholder:text-muted-foreground",
          className
        )}
        {...props}
      >
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-1 text-left">
          {multiple ? (
            isEmpty ? (
              <span className="min-w-0 truncate text-muted-foreground">
                {placeholder}
              </span>
            ) : (
              selected.map((itemValue) => {
                const label = getLabel(itemValue)
                return (
                  <Badge key={itemValue} variant="secondary">
                    {label}
                    <span
                      role="button"
                      tabIndex={-1}
                      aria-label={`Remove ${
                        typeof label === "string" ? label : itemValue
                      }`}
                      data-slot="combobox-badge-remove"
                      onClick={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                        remove(itemValue)
                      }}
                      className="flex size-3.5 items-center justify-center rounded-sm transition-colors hover:bg-foreground/20"
                    >
                      <XIcon className="size-3" />
                    </span>
                  </Badge>
                )
              })
            )
          ) : (
            <span className="min-w-0 truncate">
              {isEmpty ? placeholder : getLabel(selected[0] ?? "")}
            </span>
          )}
        </span>
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/button:rotate-180" />
      </Button>
    </PopoverTrigger>
  )
}

function ComboboxContent({
  className,
  searchPlaceholder = "Search...",
  children,
  ...props
}: React.ComponentProps<typeof PopoverContent> & {
  searchPlaceholder?: string
}) {
  const { multiple, selected, options, removeLast } = useCombobox(
    "ComboboxContent"
  )

  return (
    <PopoverContent
      data-slot="combobox-content"
      className={cn(
        "w-(--radix-popover-trigger-width) min-w-(--radix-popover-trigger-width) p-0",
        className
      )}
      {...props}
    >
      <Command>
        <CommandInput
          placeholder={searchPlaceholder}
          onKeyDown={(event) => {
            if (
              event.key === "Backspace" &&
              event.currentTarget.value === "" &&
              multiple &&
              selected.length > 0
            ) {
              event.preventDefault()
              removeLast()
            }
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {options?.map((option) => (
            <ComboboxItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </ComboboxItem>
          ))}
          {children}
        </CommandList>
      </Command>
    </PopoverContent>
  )
}

function ComboboxItem({
  value,
  children,
  disabled = false,
  className,
  onSelect,
  ...props
}: React.ComponentProps<typeof CommandItem> & { value: string }) {
  const { selected, disabled: rootDisabled, toggle, registerLabel } =
    useCombobox("ComboboxItem")
  const isSelected = selected.includes(value)

  React.useEffect(() => {
    registerLabel(value, children)
  }, [value, children, registerLabel])

  return (
    <CommandItem
      value={value}
      disabled={disabled || rootDisabled}
      data-slot="combobox-item"
      data-state={isSelected ? "checked" : "unchecked"}
      onSelect={() => {
        onSelect?.(value)
        toggle(value)
      }}
      className={cn("gap-0 data-[state=checked]:bg-muted/50", className)}
      {...props}
    >
      <span
        data-slot="combobox-item-indicator"
        className="mr-2 flex size-4 shrink-0 items-center justify-center"
      >
        {isSelected && <CheckIcon className="size-4" />}
      </span>
      {children}
    </CommandItem>
  )
}

function ComboboxClear({ className, ...props }: React.ComponentProps<"span">) {
  const { selected, disabled, clear } = useCombobox("ComboboxClear")

  if (disabled || selected.length === 0) return null

  return (
    <span
      role="button"
      tabIndex={-1}
      data-slot="combobox-clear"
      aria-label="Clear selection"
      onClick={(event) => {
        event.stopPropagation()
        event.preventDefault()
        clear()
      }}
      className={cn(
        "flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      <XIcon className="size-3.5" />
    </span>
  )
}

export {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
}
export type { ComboboxOption, ComboboxProps }
