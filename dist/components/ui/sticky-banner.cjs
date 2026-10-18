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

// src/components/ui/sticky-banner.tsx
var sticky_banner_exports = {};
__export(sticky_banner_exports, {
  StickyBanner: () => StickyBanner
});
module.exports = __toCommonJS(sticky_banner_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function StickyBanner({
  dismissible = true,
  onDismiss,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = (0, import_react.useState)(true);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ...props,
      "data-slot": "sticky-banner",
      className: (0, import_utils.cn)(
        "sticky top-0 z-60 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/75 px-4 py-2.5 text-center text-sm text-primary-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "sticky-banner-content", className: "flex-1", children }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            "data-slot": "sticky-banner-dismiss",
            "aria-label": "Dismiss announcement",
            onClick: () => {
              setOpen(false);
              onDismiss?.();
            },
            className: "-mr-1 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                "aria-hidden": true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 3l8 8M11 3l-8 8" })
              }
            )
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StickyBanner
});
//# sourceMappingURL=sticky-banner.cjs.map