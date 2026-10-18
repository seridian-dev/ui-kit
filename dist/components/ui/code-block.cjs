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

// src/components/ui/code-block.tsx
var code_block_exports = {};
__export(code_block_exports, {
  CodeBlock: () => CodeBlock
});
module.exports = __toCommonJS(code_block_exports);
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function CodeBlock({
  tabs,
  code,
  language = "bash",
  className
}) {
  const [activeTab, setActiveTab] = (0, import_react.useState)(0);
  const [copied, setCopied] = (0, import_react.useState)(false);
  const [direction, setDirection] = (0, import_react.useState)(0);
  const preRef = (0, import_react.useRef)(null);
  const tabsContainerRef = (0, import_react.useRef)(null);
  const tabRefs = (0, import_react.useRef)([]);
  const [hasOverflow, setHasOverflow] = (0, import_react.useState)(false);
  const [indicator, setIndicator] = (0, import_react.useState)(null);
  const measureIndicator = (0, import_react.useCallback)(() => {
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
  const codeContent = (0, import_react.useMemo)(() => {
    if (tabs && tabs.length > 0) {
      return tabs;
    }
    if (code) {
      return [{ label: language, code, language }];
    }
    return [];
  }, [tabs, code, language]);
  const currentCode = codeContent[activeTab]?.code || "";
  (0, import_react.useLayoutEffect)(() => {
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
  (0, import_react.useLayoutEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "group relative overflow-hidden rounded-2xl border p-0.5",
        "border-border",
        "bg-muted/50 dark:bg-foreground/5",
        "text-foreground",
        className
      ),
      "data-slot": "code-block",
      children: [
        codeContent.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center relative pr-2.5", "data-slot": "code-block-tab-bar", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            role: "tablist",
            className: (0, import_utils.cn)(
              "flex-1 min-w-0 text-xs leading-6 rounded-tl-xl gap-1 flex",
              "overflow-x-auto overflow-y-hidden",
              "scrollbar-thin scrollbar-thumb-rounded",
              "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
              "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25"
            ),
            "data-slot": "code-block-tablist",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ref: tabsContainerRef, className: "relative flex gap-1", children: [
              codeContent.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  ref: (element) => {
                    tabRefs.current[index] = element;
                  },
                  type: "button",
                  role: "tab",
                  "aria-selected": activeTab === index,
                  onClick: () => handleTabChange(index),
                  className: (0, import_utils.cn)(
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
              indicator && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative overflow-hidden", "data-slot": "code-block-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_react2.motion.button,
            {
              onClick: handleCopy,
              whileTap: { scale: 0.95 },
              className: (0, import_utils.cn)(
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
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "relative size-3.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_react2.motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 0 : 1,
                        opacity: copied ? 0 : 1,
                        rotate: copied ? 90 : 0
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "size-full" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_react2.motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 1 : 0,
                        opacity: copied ? 1 : 0,
                        rotate: copied ? 0 : -90
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "size-full" })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "pre",
            {
              ref: preRef,
              className: (0, import_utils.cn)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { mode: "wait", initial: false, custom: direction, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.code,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CodeBlock
});
//# sourceMappingURL=code-block.cjs.map