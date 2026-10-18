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

// src/components/ui/border-beam.tsx
var border_beam_exports = {};
__export(border_beam_exports, {
  BorderBeam: () => BorderBeam
});
module.exports = __toCommonJS(border_beam_exports);
var import_react = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function BorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "var(--color-primary)",
  colorTo = "var(--color-ring)",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "border-beam",
      className: "pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]",
      style: { "--border-beam-width": `${borderWidth}px` },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.motion.div,
        {
          className: (0, import_utils.cn)(
            "absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
            className
          ),
          style: {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style
          },
          initial: { offsetDistance: `${initialOffset}%` },
          animate: {
            offsetDistance: reverse ? [`${100 - initialOffset}%`, `${-initialOffset}%`] : [`${initialOffset}%`, `${100 + initialOffset}%`]
          },
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration,
            delay: -delay,
            ...transition
          }
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BorderBeam
});
//# sourceMappingURL=border-beam.cjs.map