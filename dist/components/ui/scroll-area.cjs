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

// src/components/ui/scroll-area.tsx
var scroll_area_exports = {};
__export(scroll_area_exports, {
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar
});
module.exports = __toCommonJS(scroll_area_exports);
var import_utils = require("../../lib/utils.cjs");
var import_radix_ui = require("radix-ui");
var import_jsx_runtime = require("react/jsx-runtime");
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.ScrollArea.Root,
    {
      "data-slot": "scroll-area",
      className: (0, import_utils.cn)("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_radix_ui.ScrollArea.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.ScrollArea.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.ScrollArea.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: (0, import_utils.cn)(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_radix_ui.ScrollArea.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ScrollArea,
  ScrollBar
});
//# sourceMappingURL=scroll-area.cjs.map