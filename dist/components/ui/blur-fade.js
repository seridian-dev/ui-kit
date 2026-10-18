"use client";

// src/components/ui/blur-fade.tsx
import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView
} from "motion/react";
import { jsx } from "react/jsx-runtime";
var getFilter = (v) => typeof v === "function" ? void 0 : v?.filter;
function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]: direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`
    }
  };
  const combinedVariants = variant ?? defaultVariants;
  const hiddenFilter = getFilter(combinedVariants.hidden);
  const visibleFilter = getFilter(combinedVariants.visible);
  const shouldTransitionFilter = hiddenFilter != null && visibleFilter != null && hiddenFilter !== visibleFilter;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      "data-slot": "blur-fade",
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: combinedVariants,
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
        ...shouldTransitionFilter ? { filter: { duration } } : {}
      },
      className,
      ...props,
      children
    }
  ) });
}
export {
  BlurFade
};
//# sourceMappingURL=blur-fade.js.map