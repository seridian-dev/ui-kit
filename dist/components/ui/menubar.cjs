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

// src/components/ui/menubar.tsx
var menubar_exports = {};
__export(menubar_exports, {
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger
});
module.exports = __toCommonJS(menubar_exports);
var import_utils = require("../../lib/utils.cjs");
var import_radix_ui = require("radix-ui");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Root,
    {
      "data-slot": "menubar",
      className: (0, import_utils.cn)(
        "flex h-8 items-center gap-0.5 rounded-lg border p-[3px]",
        className
      ),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: (0, import_utils.cn)(
        "flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenubarPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: (0, import_utils.cn)("z-50 min-w-36 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95", className),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: (0, import_utils.cn)(
        "group/menubar-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Menubar.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      "data-inset": inset,
      className: (0, import_utils.cn)(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.CheckIcon,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Menubar.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      "data-inset": inset,
      className: (0, import_utils.cn)(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.CheckIcon,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: (0, import_utils.cn)(
        "px-1.5 py-1 text-sm font-medium data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.Separator,
    {
      "data-slot": "menubar-separator",
      className: (0, import_utils.cn)("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: (0, import_utils.cn)(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Menubar.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Menubar.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: (0, import_utils.cn)(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Menubar.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: (0, import_utils.cn)("z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
});
//# sourceMappingURL=menubar.cjs.map