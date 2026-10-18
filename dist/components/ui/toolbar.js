"use client";

// src/components/ui/toolbar.tsx
import * as React from "react";
import { Toolbar as ToolbarPrimitive } from "radix-ui";
import { cn } from "../../lib/utils.js";
import { buttonVariants } from "./button.js";
import { toggleVariants } from "./toggle.js";
import { jsx } from "react/jsx-runtime";
var ToolbarContext = React.createContext({
  orientation: "horizontal"
});
function Toolbar({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx(ToolbarContext.Provider, { value: { orientation }, children: /* @__PURE__ */ jsx(
    ToolbarPrimitive.Root,
    {
      "data-slot": "toolbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex w-fit items-center gap-0.5 rounded-lg border border-input bg-card p-1 shadow-xs data-vertical:flex-col",
        className
      ),
      ...props
    }
  ) });
}
function ToolbarGroup({ className, ...props }) {
  const { orientation } = React.useContext(ToolbarContext);
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "toolbar-group",
      "data-orientation": orientation,
      className: cn(
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
  return /* @__PURE__ */ jsx(
    ToolbarPrimitive.Button,
    {
      "data-slot": "toolbar-button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size }), className),
      ...props
    }
  );
}
function ToolbarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ToolbarPrimitive.Separator,
    {
      "data-slot": "toolbar-separator",
      className: cn(
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
  return /* @__PURE__ */ jsx(
    ToolbarPrimitive.Link,
    {
      "data-slot": "toolbar-link",
      className: cn(
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
  return /* @__PURE__ */ jsx(
    ToolbarPrimitive.ToggleGroup,
    {
      "data-slot": "toolbar-toggle-group",
      "data-orientation": orientation,
      className: cn(
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
  return /* @__PURE__ */ jsx(
    ToolbarPrimitive.ToggleItem,
    {
      "data-slot": "toolbar-toggle-item",
      "data-variant": variant,
      "data-size": size,
      className: cn(toggleVariants({ variant, size }), className),
      ...props
    }
  );
}
export {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem
};
//# sourceMappingURL=toolbar.js.map