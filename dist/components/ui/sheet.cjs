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

// src/components/ui/sheet.tsx
var sheet_exports = {};
__export(sheet_exports, {
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger
});
module.exports = __toCommonJS(sheet_exports);
var import_utils = require("../../lib/utils.cjs");
var import_radix_ui = require("radix-ui");
var import_button = require("./button.cjs");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: (0, import_utils.cn)(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_radix_ui.Dialog.Content,
      {
        "data-slot": "sheet-content",
        "data-side": side,
        className: (0, import_utils.cn)(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "ghost",
              className: "absolute top-3 right-3",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_lucide_react.XIcon,
                  {}
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: (0, import_utils.cn)("flex flex-col gap-0.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "sheet-footer",
      className: (0, import_utils.cn)("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Title,
    {
      "data-slot": "sheet-title",
      className: (0, import_utils.cn)(
        "font-heading text-base font-medium text-foreground",
        className
      ),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: (0, import_utils.cn)("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
});
//# sourceMappingURL=sheet.cjs.map