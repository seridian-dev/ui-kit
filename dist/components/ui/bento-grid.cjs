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

// src/components/ui/bento-grid.tsx
var bento_grid_exports = {};
__export(bento_grid_exports, {
  BentoCard: () => BentoCard,
  BentoGrid: () => BentoGrid
});
module.exports = __toCommonJS(bento_grid_exports);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function BentoGrid({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "bento-grid",
      className: (0, import_utils.cn)(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      ),
      ...props
    }
  );
}
function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "bento-card",
      className: (0, import_utils.cn)(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transform-gpu",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: background }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-xl font-semibold text-foreground", children: name }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "max-w-lg text-muted-foreground", children: description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { href, children: [
            cta,
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { href, children: [
          cta,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 transform-gpu bg-transparent transition-all duration-300 group-hover:bg-foreground/3" })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BentoCard,
  BentoGrid
});
//# sourceMappingURL=bento-grid.cjs.map