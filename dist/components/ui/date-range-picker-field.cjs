"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/date-range-picker-field.tsx
var date_range_picker_field_exports = {};
__export(date_range_picker_field_exports, {
  DateRangePickerField: () => DateRangePickerField
});
module.exports = __toCommonJS(date_range_picker_field_exports);
var import_react = require("react");
var import_date_fns = require("date-fns");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_calendar = require("./calendar.cjs");
var import_label = require("./label.cjs");
var import_popover = require("./popover.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function DateRangePickerField({
  className,
  ...props
}) {
  const id = (0, import_react.useId)();
  const [date, setDate] = (0, import_react.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "date-range-picker-field",
      className,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "*:not-first:mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_label.Label, { htmlFor: id, children: "Date range picker" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.Popover, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_button.Button,
              {
                id,
                variant: "outline",
                className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "span",
                    {
                      className: (0, import_utils.cn)("truncate", !date && "text-muted-foreground"),
                      children: date?.from ? date.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                        (0, import_date_fns.format)(date.from, "LLL dd, y"),
                        " -",
                        " ",
                        (0, import_date_fns.format)(date.to, "LLL dd, y")
                      ] }) : (0, import_date_fns.format)(date.from, "LLL dd, y") : "Pick a date range"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_lucide_react.CalendarIcon,
                    {
                      size: 16,
                      className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_calendar.Calendar, { mode: "range", selected: date, onSelect: setDate }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "p",
          {
            className: "text-muted-foreground mt-2 text-xs",
            role: "region",
            "aria-live": "polite",
            children: [
              "Built with",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateRangePickerField
});
//# sourceMappingURL=date-range-picker-field.cjs.map