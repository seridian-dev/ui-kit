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

// src/components/ui/meter.tsx
var meter_exports = {};
__export(meter_exports, {
  Meter: () => Meter,
  MeterIndicator: () => MeterIndicator,
  MeterLabel: () => MeterLabel,
  MeterTrack: () => MeterTrack,
  MeterValue: () => MeterValue
});
module.exports = __toCommonJS(meter_exports);
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var MeterContext = React.createContext(null);
function useMeterContext(consumer) {
  const context = React.useContext(MeterContext);
  if (!context) {
    throw new Error(`<${consumer}> must be used within <Meter>`);
  }
  return context;
}
function Meter({
  className,
  value,
  min = 0,
  max = 100,
  format = (formatted) => formatted.toLocaleString(),
  ...props
}) {
  const safeMax = Math.max(min, max);
  const clamped = Math.min(safeMax, Math.max(min, value));
  const percent = safeMax === min ? 0 : (clamped - min) / (safeMax - min) * 100;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    MeterContext.Provider,
    {
      value: { min, max: safeMax, value: clamped, percent, format },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          role: "meter",
          "aria-valuemin": min,
          "aria-valuemax": safeMax,
          "aria-valuenow": clamped,
          "data-slot": "meter",
          className: (0, import_utils.cn)("flex w-full min-w-0 flex-col gap-1.5", className),
          ...props
        }
      )
    }
  );
}
function MeterLabel({
  className,
  ...props
}) {
  const id = React.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      id,
      "data-slot": "meter-label",
      className: (0, import_utils.cn)("text-sm font-medium text-foreground", className),
      ...props
    }
  );
}
function MeterValue({
  className,
  children,
  ...props
}) {
  const { value, format } = useMeterContext("MeterValue");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      "data-slot": "meter-value",
      className: (0, import_utils.cn)("text-sm text-muted-foreground tabular-nums", className),
      ...props,
      children: children ?? format(value)
    }
  );
}
function MeterTrack({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "meter-track",
      className: (0, import_utils.cn)(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className
      ),
      ...props
    }
  );
}
function MeterIndicator({ className, ...props }) {
  const { percent } = useMeterContext("MeterIndicator");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "meter-indicator",
      className: (0, import_utils.cn)(
        "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
        className
      ),
      style: { width: `${percent}%` },
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue
});
//# sourceMappingURL=meter.cjs.map