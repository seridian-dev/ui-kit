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

// src/components/ui/animated-circular-progress-bar.tsx
var animated_circular_progress_bar_exports = {};
__export(animated_circular_progress_bar_exports, {
  AnimatedCircularProgressBar: () => AnimatedCircularProgressBar
});
module.exports = __toCommonJS(animated_circular_progress_bar_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className
}) {
  const circumference = 2 * Math.PI * 45;
  const percentPx = circumference / 100;
  const currentPercent = Math.round((value - min) / (max - min) * 100);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "animated-circular-progress-bar",
      className: (0, import_utils.cn)("relative size-40 text-2xl font-semibold", className),
      style: {
        "--circle-size": "100px",
        "--circumference": circumference,
        "--percent-to-px": `${percentPx}px`,
        "--gap-percent": "5",
        "--offset-factor": "0",
        "--transition-length": "1s",
        "--transition-step": "200ms",
        "--delay": "0s",
        "--percent-to-deg": "3.6deg",
        transform: "translateZ(0)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "svg",
          {
            "data-slot": "animated-circular-progress-bar-gauge",
            fill: "none",
            className: "size-full",
            strokeWidth: "2",
            viewBox: "0 0 100 100",
            children: [
              currentPercent <= 90 && currentPercent >= 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: gaugeSecondaryColor,
                    "--stroke-percent": 90 - currentPercent,
                    "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transform: "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                    transition: "all var(--transition-length) ease var(--delay)",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: gaugePrimaryColor,
                    "--stroke-percent": currentPercent,
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transition: "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
                    transitionProperty: "stroke-dasharray,transform",
                    transform: "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            "data-slot": "animated-circular-progress-bar-value",
            "data-current-value": currentPercent,
            className: "animate-in fade-in absolute inset-0 m-auto size-fit delay-(--delay) duration-(--transition-length) ease-linear",
            children: currentPercent
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedCircularProgressBar
});
//# sourceMappingURL=animated-circular-progress-bar.cjs.map