"use client";

// src/components/ui/word-rotate.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" }
  },
  className
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);
  return /* @__PURE__ */ jsx("div", { "data-slot": "word-rotate", className: "overflow-hidden py-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.h1,
    {
      "data-slot": "word-rotate-text",
      className: cn(className),
      ...motionProps,
      children: words[index]
    },
    words[index]
  ) }) });
}
export {
  WordRotate
};
//# sourceMappingURL=word-rotate.js.map