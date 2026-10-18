"use client";

// src/components/ui/code-block.tsx
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function CodeBlock({
  tabs,
  code,
  language = "bash",
  className
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [direction, setDirection] = useState(0);
  const preRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef([]);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const measureIndicator = useCallback(() => {
    const container = tabsContainerRef.current;
    const activeEl = tabRefs.current[activeTab];
    if (!container || !activeEl) {
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const tabRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: tabRect.left - containerRect.left,
      width: tabRect.width
    });
  }, [activeTab]);
  const codeContent = useMemo(() => {
    if (tabs && tabs.length > 0) {
      return tabs;
    }
    if (code) {
      return [{ label: language, code, language }];
    }
    return [];
  }, [tabs, code, language]);
  const currentCode = codeContent[activeTab]?.code || "";
  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (preRef.current) {
        const hasHorizontalOverflow = preRef.current.scrollWidth > preRef.current.clientWidth;
        setHasOverflow(hasHorizontalOverflow);
      }
    };
    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (preRef.current) {
      resizeObserver.observe(preRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTab]);
  useLayoutEffect(() => {
    measureIndicator();
    const resizeObserver = new ResizeObserver(measureIndicator);
    const container = tabsContainerRef.current;
    if (container) {
      resizeObserver.observe(container);
    }
    for (const tab of tabRefs.current) {
      if (tab) {
        resizeObserver.observe(tab);
      }
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [measureIndicator]);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleTabChange = (index) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };
  if (codeContent.length === 0) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group relative overflow-hidden rounded-2xl border p-0.5",
        "border-border",
        "bg-muted/50 dark:bg-foreground/5",
        "text-foreground",
        className
      ),
      "data-slot": "code-block",
      children: [
        codeContent.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center relative pr-2.5", "data-slot": "code-block-tab-bar", children: /* @__PURE__ */ jsx(
          "div",
          {
            role: "tablist",
            className: cn(
              "flex-1 min-w-0 text-xs leading-6 rounded-tl-xl gap-1 flex",
              "overflow-x-auto overflow-y-hidden",
              "scrollbar-thin scrollbar-thumb-rounded",
              "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
              "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25"
            ),
            "data-slot": "code-block-tablist",
            children: /* @__PURE__ */ jsxs("div", { ref: tabsContainerRef, className: "relative flex gap-1", children: [
              codeContent.map((tab, index) => /* @__PURE__ */ jsx(
                "button",
                {
                  ref: (element) => {
                    tabRefs.current[index] = element;
                  },
                  type: "button",
                  role: "tab",
                  "aria-selected": activeTab === index,
                  onClick: () => handleTabChange(index),
                  className: cn(
                    "flex items-center relative gap-1.5 my-1 mb-1.5 outline-0",
                    "whitespace-nowrap font-medium transition-colors duration-150",
                    "px-1.5 rounded-lg",
                    "first:ml-2.5",
                    "hover:bg-muted dark:hover:bg-muted/50",
                    activeTab === index ? "text-foreground" : "text-muted-foreground"
                  ),
                  "data-slot": "code-block-tab",
                  children: tab.label
                },
                `${tab.label}-${index}`
              )),
              indicator && /* @__PURE__ */ jsx(
                motion.div,
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-foreground",
                  "data-slot": "code-block-indicator",
                  initial: false,
                  animate: {
                    left: indicator.left,
                    width: indicator.width
                  },
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 35
                  }
                }
              )
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", "data-slot": "code-block-content", children: [
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              onClick: handleCopy,
              whileTap: { scale: 0.95 },
              className: cn(
                "absolute top-2 right-2 z-10",
                "flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded-lg",
                "text-muted-foreground",
                "bg-background/80 backdrop-blur-sm",
                "border border-border/50",
                "opacity-70 group-hover:opacity-100",
                "hover:bg-muted dark:hover:bg-muted/50",
                "hover:text-foreground",
                "transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              ),
              "aria-label": "Copy code",
              "data-slot": "code-block-copy",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "relative size-3.5", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 0 : 1,
                        opacity: copied ? 0 : 1,
                        rotate: copied ? 90 : 0
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ jsx(Copy, { className: "size-full" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 1 : 0,
                        opacity: copied ? 1 : 0,
                        rotate: copied ? 0 : -90
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ jsx(Check, { className: "size-full" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("span", { children: copied ? "Copied" : "Copy" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "pre",
            {
              ref: preRef,
              className: cn(
                "p-4 text-sm leading-relaxed m-0",
                "bg-background dark:bg-background/50",
                codeContent.length > 1 ? "rounded-b-2xl" : "rounded-2xl",
                hasOverflow ? "overflow-x-auto" : "overflow-x-hidden",
                hasOverflow && "scrollbar-thin scrollbar-thumb-rounded",
                hasOverflow && "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
                hasOverflow && "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25",
                hasOverflow && "[&::-webkit-scrollbar]:h-2",
                hasOverflow && "[&::-webkit-scrollbar-thumb]:rounded-full",
                hasOverflow && "[&::-webkit-scrollbar-thumb]:bg-border",
                hasOverflow && "[&::-webkit-scrollbar-thumb:hover]:bg-foreground/20",
                hasOverflow && "[&::-webkit-scrollbar-track]:bg-transparent"
              ),
              "data-slot": "code-block-pre",
              children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, custom: direction, children: /* @__PURE__ */ jsx(
                motion.code,
                {
                  custom: direction,
                  initial: {
                    opacity: 0,
                    x: direction > 0 ? 20 : -20,
                    filter: "blur(4px)"
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)"
                  },
                  exit: {
                    opacity: 0,
                    x: direction > 0 ? -20 : 20,
                    filter: "blur(4px)"
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  },
                  className: "font-mono text-foreground block whitespace-pre",
                  "data-slot": "code-block-code",
                  children: currentCode
                },
                activeTab
              ) })
            }
          )
        ] })
      ]
    }
  );
}
export {
  CodeBlock
};
//# sourceMappingURL=code-block.js.map