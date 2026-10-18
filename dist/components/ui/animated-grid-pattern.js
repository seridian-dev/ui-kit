"use client";

// src/components/ui/animated-grid-pattern.tsx
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState
} from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
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
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState([]);
  const getPos = useCallback(() => {
    return [
      Math.floor(Math.random() * dimensions.width / width),
      Math.floor(Math.random() * dimensions.height / height)
    ];
  }, [dimensions.height, dimensions.width, height, width]);
  const generateSquares = useCallback(
    (count) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0
      }));
    },
    [getPos]
  );
  const updateSquarePosition = useCallback(
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
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ref: containerRef,
      "data-slot": "animated-grid-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: `url(#${id})` }),
        /* @__PURE__ */ jsx("svg", { x, y, className: "overflow-visible", children: squares.map(({ pos: [squareX, squareY], id: id2, iteration }, index) => /* @__PURE__ */ jsx(
          motion.rect,
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
export {
  AnimatedGridPattern
};
//# sourceMappingURL=animated-grid-pattern.js.map