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

// src/components/ui/compare-slider.tsx
var compare_slider_exports = {};
__export(compare_slider_exports, {
  CompareSlider: () => CompareSlider
});
module.exports = __toCommonJS(compare_slider_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function CompareSlider({
  before,
  after,
  initial = 50,
  label = "Compare before and after",
  className
}) {
  const [position, setPosition] = (0, import_react.useState)(initial);
  const ref = (0, import_react.useRef)(null);
  const moveTo = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      "data-slot": "compare-slider",
      onPointerMove: (event) => {
        if (event.buttons === 1) moveTo(event.clientX);
      },
      className: (0, import_utils.cn)(
        "relative aspect-video w-full touch-none overflow-hidden rounded-2xl border select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "compare-slider-after", className: "absolute inset-0", children: after }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "compare-slider-before",
            className: "absolute inset-0",
            style: { clipPath: `inset(0 ${100 - position}% 0 0)` },
            children: before
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "compare-slider-divider",
            style: { left: `${position}%` },
            className: "absolute inset-y-0 w-px -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                "data-slot": "compare-slider-handle",
                className: "absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.75",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 4L2.5 8 6 12M10 4l3.5 4-3.5 4" })
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "range",
            "data-slot": "compare-slider-range",
            min: 0,
            max: 100,
            value: position,
            "aria-label": label,
            onChange: (event) => setPosition(Number(event.target.value)),
            className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CompareSlider
});
//# sourceMappingURL=compare-slider.cjs.map