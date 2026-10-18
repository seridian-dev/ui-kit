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

// src/components/ui/hyper-text.tsx
var hyper_text_exports = {};
__export(hyper_text_exports, {
  HyperText: () => HyperText
});
module.exports = __toCommonJS(hyper_text_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var motionElements = {
  article: import_react2.motion.article,
  div: import_react2.motion.div,
  h1: import_react2.motion.h1,
  h2: import_react2.motion.h2,
  h3: import_react2.motion.h3,
  h4: import_react2.motion.h4,
  h5: import_react2.motion.h5,
  h6: import_react2.motion.h6,
  li: import_react2.motion.li,
  p: import_react2.motion.p,
  section: import_react2.motion.section,
  span: import_react2.motion.span
};
var DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
);
var getRandomInt = (max) => Math.floor(Math.random() * max);
function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}) {
  const MotionComponent = motionElements[Component];
  const [displayText, setDisplayText] = (0, import_react.useState)(
    () => children.split("")
  );
  const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
  const iterationCount = (0, import_react.useRef)(0);
  const elementRef = (0, import_react.useRef)(null);
  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };
  (0, import_react.useEffect)(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay, startOnView]);
  (0, import_react.useEffect)(() => {
    let animationFrameId = null;
    if (isAnimating) {
      const maxIterations = children.length;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        iterationCount.current = progress * maxIterations;
        setDisplayText(
          (currentText) => currentText.map(
            (letter, index) => letter === " " ? letter : index <= iterationCount.current ? children[index] ?? letter : characterSet[getRandomInt(characterSet.length)] ?? letter
          )
        );
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [children, duration, isAnimating, characterSet]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "hyper-text",
      className: (0, import_utils.cn)("overflow-hidden py-2 text-4xl font-bold", className),
      onMouseEnter: handleAnimationTrigger,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: displayText.map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react2.motion.span,
        {
          className: (0, import_utils.cn)("font-mono", letter === " " ? "w-3" : ""),
          children: letter.toUpperCase()
        },
        index
      )) })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HyperText
});
//# sourceMappingURL=hyper-text.cjs.map