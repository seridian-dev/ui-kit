"use client";

// src/components/ui/scroll-progress.tsx
import { motion, useScroll } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      "data-slot": "scroll-progress",
      className: cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      ),
      style: {
        scaleX: scrollYProgress
      },
      ...props
    }
  );
}
export {
  ScrollProgress
};
//# sourceMappingURL=scroll-progress.js.map