"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/direction-aware-tabs.tsx
var direction_aware_tabs_exports = {};
__export(direction_aware_tabs_exports, {
  DirectionAwareTabs: () => DirectionAwareTabs
});
module.exports = __toCommonJS(direction_aware_tabs_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_react_use_measure = __toESM(require("react-use-measure"), 1);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  roundedInner,
  onChange
}) {
  const [activeTab, setActiveTab] = (0, import_react.useState)(0);
  const [direction, setDirection] = (0, import_react.useState)(0);
  const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
  const [ref, bounds] = (0, import_react_use_measure.default)();
  const content = (0, import_react.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: " flex flex-col items-center w-full",
      "data-slot": "direction-aware-tabs",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "flex space-x-1 border border-none rounded-full cursor-pointer bg-neutral-600 px-[3px] py-[3.2px] shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)]",
              className,
              rounded
            ),
            "data-slot": "direction-aware-tabs-list",
            children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "button",
              {
                onClick: () => handleTabClick(tab.id),
                className: (0, import_utils.cn)(
                  "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-neutral-200  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
                  activeTab === tab.id ? "text-white" : "hover:text-neutral-300/60  text-neutral-200/80",
                  rounded ? roundedInner : void 0
                ),
                "data-slot": "direction-aware-tabs-trigger",
                style: { WebkitTapHighlightColor: "transparent" },
                children: [
                  activeTab === tab.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_react2.motion.span,
                    {
                      layoutId: "bubble",
                      className: (0, import_utils.cn)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.MotionConfig, { transition: { duration: 0.4, type: "spring", bounce: 0.2 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.div,
          {
            className: "relative mx-auto w-full h-full overflow-hidden",
            "data-slot": "direction-aware-tabs-content",
            initial: false,
            animate: { height: bounds.height },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-1", ref, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react2.AnimatePresence,
              {
                custom: direction,
                mode: "popLayout",
                onExitComplete: () => setIsAnimating(false),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react2.motion.div,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DirectionAwareTabs
});
//# sourceMappingURL=direction-aware-tabs.cjs.map