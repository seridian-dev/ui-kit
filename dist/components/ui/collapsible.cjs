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

// src/components/ui/collapsible.tsx
var collapsible_exports = {};
__export(collapsible_exports, {
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger
});
module.exports = __toCommonJS(collapsible_exports);
var import_radix_ui = require("radix-ui");
var import_jsx_runtime = require("react/jsx-runtime");
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Collapsible.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Collapsible.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Collapsible.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
});
//# sourceMappingURL=collapsible.cjs.map