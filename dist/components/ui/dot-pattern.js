"use client";

// src/components/ui/dot-pattern.tsx
import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
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
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ref: containerRef,
      "data-slot": "dot-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/80",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: `${id}-gradient`, children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        dots.map((dot) => /* @__PURE__ */ jsx(
          motion.circle,
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
export {
  DotPattern
};
//# sourceMappingURL=dot-pattern.js.map