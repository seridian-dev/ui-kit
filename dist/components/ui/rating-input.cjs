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

// src/components/ui/rating-input.tsx
var rating_input_exports = {};
__export(rating_input_exports, {
  RatingInput: () => RatingInput
});
module.exports = __toCommonJS(rating_input_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_radio_group = require("./radio-group.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const id = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "fieldset",
    {
      "data-slot": "rating-input",
      className: (0, import_utils.cn)("space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { className: "text-foreground text-sm leading-none font-medium", children: legend }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radio_group.RadioGroup, { className: "flex gap-1.5", defaultValue, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "label",
          {
            "data-slot": "rating-item",
            title: item.label,
            className: "border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_radio_group.RadioGroupItem,
                {
                  id: `${id}-${item.value}`,
                  value: item.value,
                  "aria-label": item.label,
                  className: "sr-only after:absolute after:inset-0"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: item.icon })
            ]
          },
          `${id}-${item.value}`
        )) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RatingInput
});
//# sourceMappingURL=rating-input.cjs.map