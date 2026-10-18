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

// src/components/ui/typing-animation.tsx
var typing_animation_exports = {};
__export(typing_animation_exports, {
  TypingAnimation: () => TypingAnimation
});
module.exports = __toCommonJS(typing_animation_exports);
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
function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1e3,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}) {
  const MotionComponent = motionElements[Component];
  const [displayedText, setDisplayedText] = (0, import_react.useState)("");
  const [currentWordIndex, setCurrentWordIndex] = (0, import_react.useState)(0);
  const [currentCharIndex, setCurrentCharIndex] = (0, import_react.useState)(0);
  const [phase, setPhase] = (0, import_react.useState)("typing");
  const elementRef = (0, import_react.useRef)(null);
  const isInView = (0, import_react2.useInView)(elementRef, {
    amount: 0.3,
    once: true
  });
  const wordsToAnimate = (0, import_react.useMemo)(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;
  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;
  const shouldStart = startOnView ? isInView : true;
  const animationSourceKey = (0, import_react.useMemo)(
    () => words ? words.join("\0") : children ?? "",
    [words, children]
  );
  (0, import_react.useEffect)(() => {
    setDisplayedText("");
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase("typing");
  }, [animationSourceKey]);
  (0, import_react.useEffect)(() => {
    let timeout = null;
    if (shouldStart && wordsToAnimate.length > 0) {
      const timeoutDelay = delay > 0 && displayedText === "" ? delay : phase === "typing" ? typingSpeed : phase === "deleting" ? deletingSpeed : pauseDelay;
      timeout = setTimeout(() => {
        const currentWord = wordsToAnimate[currentWordIndex] || "";
        const graphemes = Array.from(currentWord);
        switch (phase) {
          case "typing":
            if (currentCharIndex < graphemes.length) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex + 1).join("")
              );
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              if (hasMultipleWords || loop) {
                const isLastWord = currentWordIndex === wordsToAnimate.length - 1;
                if (!isLastWord || loop) {
                  setPhase("pause");
                }
              }
            }
            break;
          case "pause":
            setPhase("deleting");
            break;
          case "deleting":
            if (currentCharIndex > 0) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex - 1).join("")
              );
              setCurrentCharIndex(currentCharIndex - 1);
            } else {
              const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
              setCurrentWordIndex(nextIndex);
              setPhase("typing");
            }
            break;
        }
      }, timeoutDelay);
    }
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay
  ]);
  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || ""
  );
  const isComplete = !loop && currentWordIndex === wordsToAnimate.length - 1 && currentCharIndex >= currentWordGraphemes.length && phase !== "deleting";
  const shouldShowCursor = showCursor && !isComplete && (hasMultipleWords || loop || currentCharIndex < currentWordGraphemes.length);
  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "\u258C";
      case "underscore":
        return "_";
      case "line":
      default:
        return "|";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "typing-animation",
      className: (0, import_utils.cn)(
        "leading-20 tracking-[-0.02em]",
        Component === "span" && "inline-block",
        className
      ),
      ...props,
      children: [
        displayedText,
        shouldShowCursor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            "data-slot": "typing-animation-cursor",
            className: (0, import_utils.cn)("inline-block", blinkCursor && "animate-blink-cursor"),
            children: getCursorChar()
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TypingAnimation
});
//# sourceMappingURL=typing-animation.cjs.map