"use client";

// src/components/ui/direction-aware-tabs.tsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import useMeasure from "react-use-measure";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  roundedInner,
  onChange
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();
  const content = useMemo(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return activeTabContent || null;
  }, [activeTab, tabs]);
  const handleTabClick = (newTabId) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      onChange ? onChange() : null;
    }
  };
  const variants = {
    initial: (direction2) => ({
      x: 300 * direction2,
      opacity: 0,
      filter: "blur(4px)"
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction2) => ({
      x: -300 * direction2,
      opacity: 0,
      filter: "blur(4px)"
    })
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: " flex flex-col items-center w-full",
      "data-slot": "direction-aware-tabs",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex space-x-1 border border-none rounded-full cursor-pointer bg-neutral-600 px-[3px] py-[3.2px] shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)]",
              className,
              rounded
            ),
            "data-slot": "direction-aware-tabs-list",
            children: tabs.map((tab) => /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleTabClick(tab.id),
                className: cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-neutral-200  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
                  activeTab === tab.id ? "text-white" : "hover:text-neutral-300/60  text-neutral-200/80",
                  rounded ? roundedInner : void 0
                ),
                "data-slot": "direction-aware-tabs-trigger",
                style: { WebkitTapHighlightColor: "transparent" },
                children: [
                  activeTab === tab.id && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      layoutId: "bubble",
                      className: cn(
                        "absolute inset-0 z-10 bg-neutral-700 mix-blend-difference shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)] border border-white/10",
                        rounded ? roundedInner : "rounded-full"
                      ),
                      "data-slot": "direction-aware-tabs-bubble",
                      transition: { type: "spring", bounce: 0.19, duration: 0.4 }
                    }
                  ),
                  tab.label
                ]
              },
              tab.id
            ))
          }
        ),
        /* @__PURE__ */ jsx(MotionConfig, { transition: { duration: 0.4, type: "spring", bounce: 0.2 }, children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "relative mx-auto w-full h-full overflow-hidden",
            "data-slot": "direction-aware-tabs-content",
            initial: false,
            animate: { height: bounds.height },
            children: /* @__PURE__ */ jsx("div", { className: "p-1", ref, children: /* @__PURE__ */ jsx(
              AnimatePresence,
              {
                custom: direction,
                mode: "popLayout",
                onExitComplete: () => setIsAnimating(false),
                children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    variants,
                    initial: "initial",
                    animate: "active",
                    exit: "exit",
                    custom: direction,
                    onAnimationStart: () => setIsAnimating(true),
                    onAnimationComplete: () => setIsAnimating(false),
                    children: content
                  },
                  activeTab
                )
              }
            ) })
          }
        ) })
      ]
    }
  );
}
export {
  DirectionAwareTabs
};
//# sourceMappingURL=direction-aware-tabs.js.map