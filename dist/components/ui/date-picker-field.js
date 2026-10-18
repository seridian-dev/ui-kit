"use client";

// src/components/ui/date-picker-field.tsx
import { useId, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { Calendar } from "./calendar.js";
import { Label } from "./label.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./popover.js";
import { jsx, jsxs } from "react/jsx-runtime";
function DatePickerField({ className, ...props }) {
  const id = useId();
  const [date, setDate] = useState();
  return /* @__PURE__ */ jsxs("div", { "data-slot": "date-picker-field", className, ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: id, children: "Date picker" }),
      /* @__PURE__ */ jsxs(Popover, { children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          Button,
          {
            id,
            variant: "outline",
            className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn("truncate", !date && "text-muted-foreground"),
                  children: date ? format(date, "PPP") : "Pick a date"
                }
              ),
              /* @__PURE__ */ jsx(
                CalendarIcon,
                {
                  size: 16,
                  className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ jsx(Calendar, { mode: "single", selected: date, onSelect: setDate }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: "text-muted-foreground mt-2 text-xs",
        role: "region",
        "aria-live": "polite",
        children: [
          "Built with",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "hover:text-foreground underline",
              href: "https://daypicker.dev/",
              target: "_blank",
              rel: "noopener nofollow",
              children: "React DayPicker"
            }
          )
        ]
      }
    )
  ] });
}
export {
  DatePickerField
};
//# sourceMappingURL=date-picker-field.js.map