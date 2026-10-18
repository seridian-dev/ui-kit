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

// src/components/ui/empty-state.tsx
var empty_state_exports = {};
__export(empty_state_exports, {
  EmptyState: () => EmptyState
});
module.exports = __toCommonJS(empty_state_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function EmptyState({
  className,
  title,
  description,
  icon,
  actions,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: (0, import_utils.cn)(
        "flex flex-col items-center justify-center gap-4 px-6 py-8 text-center",
        className
      ),
      ...props,
      children: [
        icon != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "empty-state-icon",
            "aria-hidden": "true",
            className: "text-muted-foreground [&>svg]:size-10",
            children: icon
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex max-w-90 flex-col items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { "data-slot": "empty-state-title", className: "font-heading text-base font-medium text-foreground", children: title }),
          description != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { "data-slot": "empty-state-description", className: "text-sm text-muted-foreground", children: description })
        ] }),
        actions != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "empty-state-actions", className: "mt-1 flex flex-row items-center gap-2", children: actions })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmptyState
});
//# sourceMappingURL=empty-state.cjs.map