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

// src/components/ui/kbd.tsx
var kbd_exports = {};
__export(kbd_exports, {
  Kbd: () => Kbd,
  KbdGroup: () => KbdGroup
});
module.exports = __toCommonJS(kbd_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "kbd",
    {
      "data-slot": "kbd",
      className: (0, import_utils.cn)(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border-b-2 border-b-input bg-muted px-1.5 font-mono text-2xs font-medium text-muted-foreground select-none",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      "data-slot": "kbd-group",
      className: (0, import_utils.cn)("inline-flex items-center gap-1", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Kbd,
  KbdGroup
});
//# sourceMappingURL=kbd.cjs.map