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

// src/components/ui/progress.tsx
var progress_exports = {};
__export(progress_exports, {
  Progress: () => Progress
});
module.exports = __toCommonJS(progress_exports);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Progress.Root,
    {
      "data-slot": "progress",
      className: (0, import_utils.cn)(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_radix_ui.Progress.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "size-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Progress
});
//# sourceMappingURL=progress.cjs.map