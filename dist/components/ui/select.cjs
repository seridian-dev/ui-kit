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

// src/components/ui/select.tsx
var select_exports = {};
__export(select_exports, {
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue
});
module.exports = __toCommonJS(select_exports);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Select.Group,
    {
      "data-slot": "select-group",
      className: (0, import_utils.cn)("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: (0, import_utils.cn)(
        "group/select-trigger flex w-fit items-center justify-between gap-2 rounded-lg border border-input bg-background py-2.5 pr-3 pl-3 text-sm leading-5 text-foreground whitespace-nowrap shadow-xs transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=open]:border-ring data-[state=open]:bg-muted disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-11 data-[size=sm]:h-9 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { className: "pointer-events-none size-4 text-foreground/70 transition-transform duration-150 group-data-[state=open]/select-trigger:rotate-180" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Select.Content,
    {
      "data-slot": "select-content",
      "data-align-trigger": position === "item-aligned",
      className: (0, import_utils.cn)("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 max-w-[min(24rem,calc(100vw-2rem))] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-border bg-popover p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_radix_ui.Select.Viewport,
          {
            "data-position": position,
            className: (0, import_utils.cn)(
              "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
              position === "popper" && ""
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Select.Label,
    {
      "data-slot": "select-label",
      className: (0, import_utils.cn)("px-2 py-1.5 text-sm font-medium text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Select.Item,
    {
      "data-slot": "select-item",
      className: (0, import_utils.cn)(
        "relative flex min-h-10 w-full cursor-default items-center gap-2 rounded-md py-2 pr-10 pl-2.5 text-sm leading-5 outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[state=checked]:font-medium data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckIcon, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Select.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Select.Separator,
    {
      "data-slot": "select-separator",
      className: (0, import_utils.cn)("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Select.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: (0, import_utils.cn)(
        "z-10 flex min-h-8 cursor-default items-center justify-center rounded-sm bg-popover py-1.5 text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronUpIcon, { "aria-hidden": "true" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Select.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: (0, import_utils.cn)(
        "z-10 flex min-h-8 cursor-default items-center justify-center rounded-sm bg-popover py-1.5 text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { "aria-hidden": "true" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
});
//# sourceMappingURL=select.cjs.map