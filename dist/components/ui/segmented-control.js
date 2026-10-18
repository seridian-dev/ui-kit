"use client";

// src/components/ui/segmented-control.tsx
import * as React from "react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
var SegmentedControlContext = React.createContext(null);
function useSegmentedControlContext() {
  const ctx = React.useContext(SegmentedControlContext);
  if (!ctx) {
    throw new Error(
      "SegmentedControlItem must be used within a SegmentedControl"
    );
  }
  return ctx;
}
function SegmentedControl({
  className,
  value,
  onChange,
  label,
  fill = false,
  children,
  ...props
}) {
  const contextValue = React.useMemo(
    () => ({ value, onChange, fill }),
    [value, onChange, fill]
  );
  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }
    const items = Array.from(
      event.currentTarget.querySelectorAll(
        '[role="radio"]:not(:disabled)'
      )
    );
    if (items.length === 0) return;
    const currentIndex = items.findIndex(
      (item) => item.dataset.value === value
    );
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    } else if (event.key === "ArrowLeft") {
      nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    }
    const next = items[nextIndex];
    if (next) {
      event.preventDefault();
      next.focus();
      onChange(next.dataset.value);
    }
  };
  return /* @__PURE__ */ jsx(SegmentedControlContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "segmented-control",
      role: "radiogroup",
      "aria-label": label,
      onKeyDown: handleKeyDown,
      className: cn(
        "inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5",
        fill && "flex w-full",
        className
      ),
      ...props,
      children
    }
  ) });
}
function SegmentedControlItem({
  className,
  value: itemValue,
  disabled = false,
  children,
  ...props
}) {
  const ctx = useSegmentedControlContext();
  const isSelected = ctx.value === itemValue;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "data-slot": "segmented-control-item",
      role: "radio",
      "aria-checked": isSelected,
      "data-value": itemValue,
      "data-state": isSelected ? "active" : "inactive",
      disabled,
      tabIndex: isSelected ? 0 : -1,
      onClick: () => {
        if (!disabled && !isSelected) ctx.onChange(itemValue);
      },
      className: cn(
        "inline-flex h-7 items-center justify-center gap-1.5 rounded-md px-2.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        ctx.fill && "flex-1",
        isSelected ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
        className
      ),
      ...props,
      children
    }
  );
}
export {
  SegmentedControl,
  SegmentedControlItem
};
//# sourceMappingURL=segmented-control.js.map