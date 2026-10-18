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

// src/components/ui/spinner.tsx
var spinner_exports = {};
__export(spinner_exports, {
  Spinner: () => Spinner,
  spinnerVariants: () => spinnerVariants
});
module.exports = __toCommonJS(spinner_exports);
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var spinnerVariants = (0, import_class_variance_authority.cva)(
  "inline-flex shrink-0 items-center justify-center text-primary",
  {
    variants: {
      size: {
        sm: "size-4",
        default: "size-6",
        lg: "size-8"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function Spinner({
  className,
  size,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      role: "status",
      "data-slot": "spinner",
      "data-size": size,
      className: (0, import_utils.cn)(spinnerVariants({ size, className })),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            className: "size-full animate-spin",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "circle",
              {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeDasharray: "44 63"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Loading" })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spinner,
  spinnerVariants
});
//# sourceMappingURL=spinner.cjs.map