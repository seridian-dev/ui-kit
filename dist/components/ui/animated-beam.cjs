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

// src/components/ui/animated-beam.tsx
var animated_beam_exports = {};
__export(animated_beam_exports, {
  AnimatedBeam: () => AnimatedBeam
});
module.exports = __toCommonJS(animated_beam_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "var(--color-border)",
  pathWidth = 2,
  pathOpacity = 0.4,
  gradientStartColor = "var(--color-primary)",
  gradientStopColor = "var(--color-ring)",
  repeat = Infinity,
  repeatDelay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}) {
  const id = (0, import_react.useId)();
  const [pathD, setPathD] = (0, import_react.useState)("");
  const [svgDimensions, setSvgDimensions] = (0, import_react.useState)({ width: 0, height: 0 });
  const gradientCoordinates = reverse ? {
    x1: ["90%", "-10%"],
    x2: ["100%", "0%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  } : {
    x1: ["10%", "110%"],
    x2: ["0%", "100%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  };
  (0, import_react.useEffect)(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      "data-slot": "animated-beam",
      fill: "none",
      width: svgDimensions.width,
      height: svgDimensions.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: (0, import_utils.cn)(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className
      ),
      viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: pathD,
            stroke: pathColor,
            strokeWidth: pathWidth,
            strokeOpacity: pathOpacity,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: pathD,
            strokeWidth: pathWidth,
            stroke: `url(#${id})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_react2.motion.linearGradient,
          {
            className: "transform-gpu",
            id,
            gradientUnits: "userSpaceOnUse",
            initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
            animate: {
              x1: gradientCoordinates.x1,
              x2: gradientCoordinates.x2,
              y1: gradientCoordinates.y1,
              y2: gradientCoordinates.y2
            },
            transition: {
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1],
              repeat,
              repeatDelay
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: gradientStartColor }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "32.5%", stopColor: gradientStopColor }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: gradientStopColor, stopOpacity: "0" })
            ]
          }
        ) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedBeam
});
//# sourceMappingURL=animated-beam.cjs.map