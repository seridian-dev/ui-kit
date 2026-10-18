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

// src/components/ui/animated-grid-pattern.tsx
var animated_grid_pattern_exports = {};
__export(animated_grid_pattern_exports, {
  AnimatedGridPattern: () => AnimatedGridPattern
});
module.exports = __toCommonJS(animated_grid_pattern_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const id = (0, import_react.useId)();
  const containerRef = (0, import_react.useRef)(null);
  const [dimensions, setDimensions] = (0, import_react.useState)({ width: 0, height: 0 });
  const [squares, setSquares] = (0, import_react.useState)([]);
  const getPos = (0, import_react.useCallback)(() => {
    return [
      Math.floor(Math.random() * dimensions.width / width),
      Math.floor(Math.random() * dimensions.height / height)
    ];
  }, [dimensions.height, dimensions.width, height, width]);
  const generateSquares = (0, import_react.useCallback)(
    (count) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0
      }));
    },
    [getPos]
  );
  const updateSquarePosition = (0, import_react.useCallback)(
    (squareId) => {
      setSquares((currentSquares) => {
        const current = currentSquares[squareId];
        if (!current || current.id !== squareId) return currentSquares;
        const nextSquares = currentSquares.slice();
        nextSquares[squareId] = {
          ...current,
          pos: getPos(),
          iteration: current.iteration + 1
        };
        return nextSquares;
      });
    },
    [getPos]
  );
  (0, import_react.useEffect)(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);
  (0, import_react.useEffect)(() => {
    const element = containerRef.current;
    let resizeObserver = null;
    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setDimensions((currentDimensions) => {
            const nextWidth = entry.contentRect.width;
            const nextHeight = entry.contentRect.height;
            if (currentDimensions.width === nextWidth && currentDimensions.height === nextHeight) {
              return currentDimensions;
            }
            return { width: nextWidth, height: nextHeight };
          });
        }
      });
      resizeObserver.observe(element);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      ref: containerRef,
      "data-slot": "animated-grid-pattern",
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "100%", height: "100%", fill: `url(#${id})` }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { x, y, className: "overflow-visible", children: squares.map(({ pos: [squareX, squareY], id: id2, iteration }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.rect,
          {
            initial: { opacity: 0 },
            animate: { opacity: maxOpacity },
            transition: {
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay
            },
            onAnimationComplete: () => updateSquarePosition(id2),
            width: width - 1,
            height: height - 1,
            x: squareX * width + 1,
            y: squareY * height + 1,
            fill: "currentColor",
            strokeWidth: "0"
          },
          `${id2}-${iteration}`
        )) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedGridPattern
});
//# sourceMappingURL=animated-grid-pattern.cjs.map