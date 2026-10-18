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

// src/components/ui/progressive-blur.tsx
var progressive_blur_exports = {};
__export(progressive_blur_exports, {
  ProgressiveBlur: () => ProgressiveBlur
});
module.exports = __toCommonJS(progressive_blur_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64]
}) {
  const divElements = Array(blurLevels.length - 2).fill(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "progressive-blur",
      className: (0, import_utils.cn)(
        "gradient-blur pointer-events-none absolute inset-x-0 z-10",
        className,
        position === "top" ? "top-0" : position === "bottom" ? "bottom-0" : "inset-y-0"
      ),
      style: {
        height: position === "both" ? "100%" : height
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "progressive-blur-layer",
            className: "absolute inset-0",
            style: {
              zIndex: 1,
              backdropFilter: `blur(${blurLevels[0]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[0]}px)`,
              maskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
              WebkitMaskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`
            }
          }
        ),
        divElements.map((_, index) => {
          const blurIndex = index + 1;
          const startPercent = blurIndex * 12.5;
          const midPercent = (blurIndex + 1) * 12.5;
          const endPercent = (blurIndex + 2) * 12.5;
          const maskGradient = position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              "data-slot": "progressive-blur-layer",
              className: "absolute inset-0",
              style: {
                zIndex: index + 2,
                backdropFilter: `blur(${blurLevels[blurIndex]}px)`,
                WebkitBackdropFilter: `blur(${blurLevels[blurIndex]}px)`,
                maskImage: maskGradient,
                WebkitMaskImage: maskGradient
              }
            },
            `blur-${index}`
          );
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "progressive-blur-layer",
            className: "absolute inset-0",
            style: {
              zIndex: blurLevels.length,
              backdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
              maskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
              WebkitMaskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`
            }
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProgressiveBlur
});
//# sourceMappingURL=progressive-blur.cjs.map