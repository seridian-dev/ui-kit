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

// src/components/ui/command.tsx
var command_exports = {};
__export(command_exports, {
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut
});
module.exports = __toCommonJS(command_exports);
var import_cmdk = require("cmdk");
var import_utils = require("../../lib/utils.cjs");
var import_dialog = require("./dialog.cjs");
var import_input_group = require("./input-group.cjs");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: (0, import_utils.cn)(
        "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_dialog.DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_dialog.DialogContent,
      {
        className: (0, import_utils.cn)(
          "top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0",
          className
        ),
        showCloseButton,
        children
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "command-input-wrapper", className: "p-1 pb-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_input_group.InputGroup, { className: "h-10! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_cmdk.Command.Input,
      {
        "data-slot": "command-input",
        className: (0, import_utils.cn)(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_input_group.InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.SearchIcon, { className: "size-4 shrink-0 opacity-50" }) })
  ] }) });
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: (0, import_utils.cn)(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: (0, import_utils.cn)("py-6 text-center text-sm", className),
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: (0, import_utils.cn)(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-sm **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Separator,
    {
      "data-slot": "command-separator",
      className: (0, import_utils.cn)("-mx-1 h-px bg-border", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: (0, import_utils.cn)(
        "group/command-item relative flex min-h-10 cursor-default items-center gap-2 rounded-sm px-3 py-2 text-sm leading-5 outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckIcon, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      "data-slot": "command-shortcut",
      className: (0, import_utils.cn)(
        "ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground",
        className
      ),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
});
//# sourceMappingURL=command.cjs.map