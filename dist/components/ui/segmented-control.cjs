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

// src/components/ui/segmented-control.tsx
var segmented_control_exports = {};
__export(segmented_control_exports, {
  SegmentedControl: () => SegmentedControl,
  SegmentedControlItem: () => SegmentedControlItem
});
module.exports = __toCommonJS(segmented_control_exports);
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SegmentedControlContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "segmented-control",
      role: "radiogroup",
      "aria-label": label,
      onKeyDown: handleKeyDown,
      className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      className: (0, import_utils.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SegmentedControl,
  SegmentedControlItem
});
//# sourceMappingURL=segmented-control.cjs.map