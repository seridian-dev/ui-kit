"use client";

// src/components/ui/animated-list.tsx
import React, {
  useEffect,
  useMemo,
  useState
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "animated-list-item",
      ...animations,
      layout: true,
      className: "mx-auto w-full",
      children
    }
  );
}
var AnimatedList = React.memo(
  ({ children, className, delay = 1e3, ...props }) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );
    useEffect(() => {
      let timeout = null;
      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }
      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [index, delay, childrenArray.length]);
    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "animated-list",
        className: cn(`flex flex-col items-center gap-4`, className),
        ...props,
        children: /* @__PURE__ */ jsx(AnimatePresence, { children: itemsToShow.map((item) => /* @__PURE__ */ jsx(AnimatedListItem, { children: item }, item.key)) })
      }
    );
  }
);
AnimatedList.displayName = "AnimatedList";
export {
  AnimatedList,
  AnimatedListItem
};
//# sourceMappingURL=animated-list.js.map