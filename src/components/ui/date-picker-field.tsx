// Adapted from Origin UI's date picker field recipe (MIT,
// github.com/shadcn/originui), verified against the real upstream source at
// https://raw.githubusercontent.com/shadcn/originui/main/registry/default/components/comp-511.tsx
// (fetched directly, not reconstructed). Upstream component name: comp-511.
//
// Deviations from upstream: default export `Component` renamed to
// `DatePickerField` (named export, kit style) and given a props type
// (`React.ComponentProps<"div">`, spread on the root — upstream accepted
// none); imports remapped from `@/registry/default/ui/{calendar,button,popover,label}`
// to this kit's `./calendar`/`./button`/`./popover`/`./label` and
// `@/registry/default/lib/utils` to `@/lib/utils`; `data-slot` attribute
// added on the root. Markup is otherwise 1:1, including upstream's "Built
// with React DayPicker" credit paragraph. No hardcoded grays found —
// upstream is already shadcn-token based. Beyond existing globals.css
// animations: none needed.
"use client"

import { useId, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerFieldProps = React.ComponentProps<"div">

function DatePickerField({ className, ...props }: DatePickerFieldProps) {
  const id = useId()
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div data-slot="date-picker-field" className={className} {...props}>
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>Date picker</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className="group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
            >
              <span
                className={cn("truncate", !date && "text-muted-foreground")}
              >
                {date ? format(date, "PPP") : "Pick a date"}
              </span>
              <CalendarIcon
                size={16}
                className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
                aria-hidden="true"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  )
}

export { DatePickerField }
export type { DatePickerFieldProps }
