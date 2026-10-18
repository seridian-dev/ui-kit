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

// src/components/ui/grid-pattern.tsx
var grid_pattern_exports = {};
__export(grid_pattern_exports, {
  GridPattern: () => GridPattern
});
module.exports = __toCommonJS(grid_pattern_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}) {
  const id = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      "data-slot": "grid-pattern",
      "aria-hidden": "true",
      className: (0, import_utils.cn)(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${id})` }),
        squares && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { x, y, className: "overflow-visible", children: squares.map(([x2, y2]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "rect",
          {
            strokeWidth: "0",
            width: width - 1,
            height: height - 1,
            x: x2 * width + 1,
            y: y2 * height + 1
          },
          `${x2}-${y2}`
        )) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GridPattern
});
//# sourceMappingURL=grid-pattern.cjs.map