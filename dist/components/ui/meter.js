"use client";

// src/components/ui/meter.tsx
import * as React from "react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    MeterContext.Provider,
    {
      value: { min, max: safeMax, value: clamped, percent, format },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          role: "meter",
          "aria-valuemin": min,
          "aria-valuemax": safeMax,
          "aria-valuenow": clamped,
          "data-slot": "meter",
          className: cn("flex w-full min-w-0 flex-col gap-1.5", className),
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
  return /* @__PURE__ */ jsx(
    "span",
    {
      id,
      "data-slot": "meter-label",
      className: cn("text-sm font-medium text-foreground", className),
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
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "meter-value",
      className: cn("text-sm text-muted-foreground tabular-nums", className),
      ...props,
      children: children ?? format(value)
    }
  );
}
function MeterTrack({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "meter-track",
      className: cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className
      ),
      ...props
    }
  );
}
function MeterIndicator({ className, ...props }) {
  const { percent } = useMeterContext("MeterIndicator");
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "meter-indicator",
      className: cn(
        "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
        className
      ),
      style: { width: `${percent}%` },
      ...props
    }
  );
}
export {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue
};
//# sourceMappingURL=meter.js.map