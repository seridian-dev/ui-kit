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

// src/components/ui/dialog.tsx
var dialog_exports = {};
__export(dialog_exports, {
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger
});
module.exports = __toCommonJS(dialog_exports);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: (0, import_utils.cn)(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_radix_ui.Dialog.Content,
      {
        "data-slot": "dialog-content",
        className: (0, import_utils.cn)(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_button.Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
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
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: (0, import_utils.cn)("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "dialog-footer",
      className: (0, import_utils.cn)(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Title,
    {
      "data-slot": "dialog-title",
      className: (0, import_utils.cn)(
        "font-heading text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Dialog.Description,
    {
      "data-slot": "dialog-description",
      className: (0, import_utils.cn)(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
});
//# sourceMappingURL=dialog.cjs.map