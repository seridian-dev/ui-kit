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

// src/components/ui/aurora-text.tsx
var aurora_text_exports = {};
__export(aurora_text_exports, {
  AuroraText: () => AuroraText
});
module.exports = __toCommonJS(aurora_text_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var AuroraText = (0, import_react.memo)(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { "data-slot": "aurora-text", className: (0, import_utils.cn)("relative inline-block", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "span",
        {
          "data-slot": "aurora-text-gradient",
          className: "animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent",
          style: gradientStyle,
          "aria-hidden": "true",
          children
        }
      )
    ] });
  }
);
AuroraText.displayName = "AuroraText";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuroraText
});
//# sourceMappingURL=aurora-text.cjs.map