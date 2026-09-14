// Adapted from Origin UI's radio-group-based feedback rating recipe (MIT,
// github.com/shadcn/originui), verified against the real upstream source at
// https://raw.githubusercontent.com/shadcn/originui/main/registry/default/components/comp-167.tsx
// (fetched directly, not reconstructed). Upstream component name: comp-167.
//
// Note: the fetched comp-167 is an emoji-scale rating ("How did it go?") —
// its icons are literal emoji characters, not icons from @remixicon/react,
// so the remix→lucide fallback path never applied and the emoji scale is
// kept verbatim as upstream.
//
// Deviations from upstream: default export `Component` renamed to
// `RatingInput` (named export, kit style); the hardcoded items, legend text
// and default selection lifted into optional props (`items`, `legend`,
// `defaultValue`) whose defaults reproduce upstream's rendered output
// exactly; remaining props (`React.ComponentProps<"fieldset">`) spread on
// the root fieldset; import remapped from
// `@/registry/default/ui/radio-group` to this kit's `./radio-group`;
// `data-slot` attributes added on the root and each item label; a
// `title={item.label}` tooltip added on each item label (upstream renders
// only the emoji, giving sighted users no way to tell which circle is which
// value). No hardcoded grays found — upstream is already shadcn-token based.
// Beyond existing globals.css animations: none needed.
"use client"

import { useId } from "react"

import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type RatingItem = {
  value: string
  label: string
  icon: React.ReactNode
}

type RatingInputProps = React.ComponentProps<"fieldset"> & {
  items?: RatingItem[]
  legend?: React.ReactNode
  defaultValue?: string
}

const defaultItems: RatingItem[] = [
  { value: "1", label: "Angry", icon: "😠" },
  { value: "2", label: "Sad", icon: "🙁" },
  { value: "3", label: "Neutral", icon: "😐" },
  { value: "4", label: "Happy", icon: "🙂" },
  { value: "5", label: "Laughing", icon: "😀" },
]

function RatingInput({
  items = defaultItems,
  legend = "How did it go?",
  defaultValue = "3",
  className,
  ...props
}: RatingInputProps) {
  const id = useId()

  return (
    <fieldset
      data-slot="rating-input"
      className={cn("space-y-4", className)}
      {...props}
    >
      <legend className="text-foreground text-sm leading-none font-medium">
        {legend}
      </legend>
      <RadioGroup className="flex gap-1.5" defaultValue={defaultValue}>
        {items.map((item) => (
          <label
            key={`${id}-${item.value}`}
            data-slot="rating-item"
            title={item.label}
            className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
            />
            {item.icon}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}

export { RatingInput }
export type { RatingInputProps, RatingItem }
