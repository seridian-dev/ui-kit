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

// src/components/ui/dot-pattern.tsx
var dot_pattern_exports = {};
__export(dot_pattern_exports, {
  DotPattern: () => DotPattern
});
module.exports = __toCommonJS(dot_pattern_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}) {
  const id = (0, import_react.useId)();
  const containerRef = (0, import_react.useRef)(null);
  const [dimensions, setDimensions] = (0, import_react.useState)({ width: 0, height: 0 });
  (0, import_react.useEffect)(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width: width2, height: height2 } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width2, height: height2 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const dots = Array.from(
    {
      length: Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height)
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width);
      const row = Math.floor(i / Math.ceil(dimensions.width / width));
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
      };
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      ref: containerRef,
      "data-slot": "dot-pattern",
      "aria-hidden": "true",
      className: (0, import_utils.cn)(
        "pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/80",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", { id: `${id}-gradient`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        dots.map((dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.circle,
          {
            cx: dot.x,
            cy: dot.y,
            r: cr,
            fill: glow ? `url(#${id}-gradient)` : "currentColor",
            initial: glow ? { opacity: 0.4, scale: 1 } : {},
            animate: glow ? {
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            } : {},
            transition: glow ? {
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: dot.delay,
              ease: "easeInOut"
            } : {}
          },
          `${dot.x}-${dot.y}`
        ))
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DotPattern
});
//# sourceMappingURL=dot-pattern.cjs.map