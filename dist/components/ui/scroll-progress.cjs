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

// src/components/ui/scroll-progress.tsx
var scroll_progress_exports = {};
__export(scroll_progress_exports, {
  ScrollProgress: () => ScrollProgress
});
module.exports = __toCommonJS(scroll_progress_exports);
var import_react = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = (0, import_react.useScroll)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.motion.div,
    {
      ref,
      "data-slot": "scroll-progress",
      className: (0, import_utils.cn)(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      ),
      style: {
        scaleX: scrollYProgress
      },
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ScrollProgress
});
//# sourceMappingURL=scroll-progress.cjs.map