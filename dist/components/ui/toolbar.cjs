"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/toolbar.tsx
var toolbar_exports = {};
__export(toolbar_exports, {
  Toolbar: () => Toolbar,
  ToolbarButton: () => ToolbarButton,
  ToolbarGroup: () => ToolbarGroup,
  ToolbarLink: () => ToolbarLink,
  ToolbarSeparator: () => ToolbarSeparator,
  ToolbarToggleGroup: () => ToolbarToggleGroup,
  ToolbarToggleItem: () => ToolbarToggleItem
});
module.exports = __toCommonJS(toolbar_exports);
var React = __toESM(require("react"), 1);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_toggle = require("./toggle.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var ToolbarContext = React.createContext({
  orientation: "horizontal"
});
function Toolbar({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarContext.Provider, { value: { orientation }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.Root,
    {
      "data-slot": "toolbar",
      "data-orientation": orientation,
      orientation,
      className: (0, import_utils.cn)(
        "flex w-fit items-center gap-0.5 rounded-lg border border-input bg-card p-1 shadow-xs data-vertical:flex-col",
        className
      ),
      ...props
    }
  ) });
}
function ToolbarGroup({ className, ...props }) {
  const { orientation } = React.useContext(ToolbarContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "group",
      "data-slot": "toolbar-group",
      "data-orientation": orientation,
      className: (0, import_utils.cn)(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      ),
      ...props
    }
  );
}
function ToolbarButton({
  className,
  variant = "ghost",
  size = "sm",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.Button,
    {
      "data-slot": "toolbar-button",
      "data-variant": variant,
      "data-size": size,
      className: (0, import_utils.cn)((0, import_button.buttonVariants)({ variant, size }), className),
      ...props
    }
  );
}
function ToolbarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.Separator,
    {
      "data-slot": "toolbar-separator",
      className: (0, import_utils.cn)(
        "mx-0.5 shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:h-4 data-vertical:w-px",
        className
      ),
      ...props
    }
  );
}
function ToolbarLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.Link,
    {
      "data-slot": "toolbar-link",
      className: (0, import_utils.cn)(
        "flex h-7 items-center rounded-[min(var(--radius-md),12px)] px-2 text-sm font-medium outline-none underline-offset-4 hover:bg-muted hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props
    }
  );
}
function ToolbarToggleGroup({
  className,
  ...props
}) {
  const { orientation } = React.useContext(ToolbarContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.ToggleGroup,
    {
      "data-slot": "toolbar-toggle-group",
      "data-orientation": orientation,
      className: (0, import_utils.cn)(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      ),
      ...props
    }
  );
}
function ToolbarToggleItem({
  className,
  variant = "outline",
  size = "sm",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Toolbar.ToggleItem,
    {
      "data-slot": "toolbar-toggle-item",
      "data-variant": variant,
      "data-size": size,
      className: (0, import_utils.cn)((0, import_toggle.toggleVariants)({ variant, size }), className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem
});
//# sourceMappingURL=toolbar.cjs.map