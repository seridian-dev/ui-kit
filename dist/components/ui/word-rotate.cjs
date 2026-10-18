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

// src/components/ui/word-rotate.tsx
var word_rotate_exports = {};
__export(word_rotate_exports, {
  WordRotate: () => WordRotate
});
module.exports = __toCommonJS(word_rotate_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const [index, setIndex] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "word-rotate", className: "overflow-hidden py-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.motion.h1,
    {
      "data-slot": "word-rotate-text",
      className: (0, import_utils.cn)(className),
      ...motionProps,
      children: words[index]
    },
    words[index]
  ) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WordRotate
});
//# sourceMappingURL=word-rotate.cjs.map