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

// src/components/ui/slider.tsx
var slider_exports = {};
__export(slider_exports, {
  Slider: () => Slider
});
module.exports = __toCommonJS(slider_exports);
var React = __toESM(require("react"), 1);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function thumbLabel(label, index, count) {
  if (!label || count === 1) return label;
  if (count === 2) return `${label}, ${index === 0 ? "minimum" : "maximum"}`;
  return `${label}, ${index + 1} of ${count}`;
}
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  getAriaLabel,
  getAriaValueText,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  onValueChange,
  ...props
}) {
  const _values = React.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  const [uncontrolledValues, setUncontrolledValues] = React.useState(_values);
  const liveValues = Array.isArray(value) ? value : uncontrolledValues;
  const handleValueChange = React.useCallback(
    (next) => {
      setUncontrolledValues(next);
      onValueChange?.(next);
    },
    [onValueChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Slider.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      onValueChange: handleValueChange,
      className: (0, import_utils.cn)(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_radix_ui.Slider.Track,
          {
            "data-slot": "slider-track",
            className: "relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_radix_ui.Slider.Range,
              {
                "data-slot": "slider-range",
                className: "absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => (
          // The thumb is the element with role="slider", so the accessible
          // name and description go on it, not on the Root wrapper.
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_radix_ui.Slider.Thumb,
            {
              "data-slot": "slider-thumb",
              "aria-label": getAriaLabel?.(index) ?? thumbLabel(ariaLabel, index, _values.length),
              "aria-labelledby": ariaLabelledBy,
              "aria-describedby": ariaDescribedBy,
              "aria-valuetext": getAriaValueText && liveValues[index] !== void 0 ? getAriaValueText(liveValues[index], index) : void 0,
              className: "relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
            },
            index
          )
        ))
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Slider
});
//# sourceMappingURL=slider.cjs.map