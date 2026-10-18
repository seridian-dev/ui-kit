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

// src/components/ui/browser-mockup.tsx
var browser_mockup_exports = {};
__export(browser_mockup_exports, {
  BrowserMockup: () => BrowserMockup
});
module.exports = __toCommonJS(browser_mockup_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function BrowserMockup({
  url = "velora.dev",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "browser-mockup",
      className: (0, import_utils.cn)(
        "overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            "data-slot": "browser-mockup-toolbar",
            className: "flex items-center gap-3 border-b border-border/60 px-4 py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-red-500/70" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-yellow-500/70" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-green-500/70" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  "data-slot": "browser-mockup-url",
                  className: "mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-muted/60 text-xs text-muted-foreground",
                  children: url
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-14" })
            ]
          }
        ),
        children
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BrowserMockup
});
//# sourceMappingURL=browser-mockup.cjs.map