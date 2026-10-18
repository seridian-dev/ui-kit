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

// src/components/ui/image-zoom.tsx
var image_zoom_exports = {};
__export(image_zoom_exports, {
  ImageZoom: () => ImageZoom
});
module.exports = __toCommonJS(image_zoom_exports);
var import_react = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_dialog = require("./dialog.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function ImageZoom({ alt, src, className, zoomClassName, ...props }) {
  const reducedMotion = (0, import_react.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        type: "button",
        "data-slot": "image-zoom-trigger",
        className: "block cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              "data-slot": "image-zoom-thumbnail",
              alt,
              src,
              className: (0, import_utils.cn)("rounded-lg", className),
              ...props
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Zoom image" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_dialog.DialogContent,
      {
        "aria-describedby": void 0,
        className: "w-fit max-w-[calc(100%-2rem)] bg-transparent p-0 ring-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, { className: "sr-only", children: alt }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.motion.div,
            {
              "data-slot": "image-zoom-content",
              initial: reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 },
              animate: reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 },
              transition: { duration: reducedMotion ? 0.15 : 0.2, ease: "easeOut" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "img",
                {
                  "data-slot": "image-zoom-image",
                  alt,
                  src,
                  className: (0, import_utils.cn)(
                    "max-h-[85vh] w-auto max-w-full rounded-lg object-contain",
                    zoomClassName
                  )
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ImageZoom
});
//# sourceMappingURL=image-zoom.cjs.map