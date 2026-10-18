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

// src/components/ui/drawer.tsx
var drawer_exports = {};
__export(drawer_exports, {
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger
});
module.exports = __toCommonJS(drawer_exports);
var import_utils = require("../../lib/utils.cjs");
var import_vaul = require("vaul");
var import_jsx_runtime = require("react/jsx-runtime");
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_vaul.Drawer.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_vaul.Drawer.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: (0, import_utils.cn)(
        "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_vaul.Drawer.Content,
      {
        "data-slot": "drawer-content",
        className: (0, import_utils.cn)(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "drawer-header",
      className: (0, import_utils.cn)(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "drawer-footer",
      className: (0, import_utils.cn)("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_vaul.Drawer.Title,
    {
      "data-slot": "drawer-title",
      className: (0, import_utils.cn)(
        "font-heading text-base font-medium text-foreground",
        className
      ),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_vaul.Drawer.Description,
    {
      "data-slot": "drawer-description",
      className: (0, import_utils.cn)("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
});
//# sourceMappingURL=drawer.cjs.map