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

// src/components/ui/iphone-mockup.tsx
var iphone_mockup_exports = {};
__export(iphone_mockup_exports, {
  IPhoneMockup: () => IPhoneMockup
});
module.exports = __toCommonJS(iphone_mockup_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function IPhoneMockup({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "iphone-mockup",
      className: (0, import_utils.cn)("relative mx-auto w-70", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            "data-slot": "iphone-mockup-frame",
            className: "relative aspect-[9/19] overflow-hidden rounded-[3rem] border-10 border-neutral-800 bg-background shadow-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  "data-slot": "iphone-mockup-dynamic-island",
                  className: "absolute top-2.5 left-1/2 z-20 h-6.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "iphone-mockup-screen", className: "absolute inset-0", children })
            ]
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IPhoneMockup
});
//# sourceMappingURL=iphone-mockup.cjs.map