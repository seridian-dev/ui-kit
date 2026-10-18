"use client";

// src/components/ui/rating-input.tsx
import { useId } from "react";
import { cn } from "../../lib/utils.js";
import { RadioGroup, RadioGroupItem } from "./radio-group.js";
import { jsx, jsxs } from "react/jsx-runtime";
var defaultItems = [
  { value: "1", label: "Angry", icon: "\u{1F620}" },
  { value: "2", label: "Sad", icon: "\u{1F641}" },
  { value: "3", label: "Neutral", icon: "\u{1F610}" },
  { value: "4", label: "Happy", icon: "\u{1F642}" },
  { value: "5", label: "Laughing", icon: "\u{1F600}" }
];
function RatingInput({
  items = defaultItems,
  legend = "How did it go?",
  defaultValue = "3",
  className,
  ...props
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      "data-slot": "rating-input",
      className: cn("space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("legend", { className: "text-foreground text-sm leading-none font-medium", children: legend }),
        /* @__PURE__ */ jsx(RadioGroup, { className: "flex gap-1.5", defaultValue, children: items.map((item) => /* @__PURE__ */ jsxs(
          "label",
          {
            "data-slot": "rating-item",
            title: item.label,
            className: "border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsx(
                RadioGroupItem,
                {
                  id: `${id}-${item.value}`,
                  value: item.value,
                  "aria-label": item.label,
                  className: "sr-only after:absolute after:inset-0"
                }
              ),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: item.icon })
            ]
          },
          `${id}-${item.value}`
        )) })
      ]
    }
  );
}
export {
  RatingInput
};
//# sourceMappingURL=rating-input.js.map