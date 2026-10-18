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

// src/components/ui/blur-fade.tsx
var blur_fade_exports = {};
__export(blur_fade_exports, {
  BlurFade: () => BlurFade
});
module.exports = __toCommonJS(blur_fade_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const ref = (0, import_react.useRef)(null);
  const inViewResult = (0, import_react2.useInView)(ref, { once: true, margin: inViewMargin });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.motion.div,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlurFade
});
//# sourceMappingURL=blur-fade.cjs.map