"use client";

// src/components/ui/number-field.tsx
import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { jsx, jsxs } from "react/jsx-runtime";
var NumberFieldContext = React.createContext(
  null
);
function useNumberFieldContext(consumer) {
  const context = React.useContext(NumberFieldContext);
  if (!context) {
    throw new Error(`<${consumer}> must be used within <NumberField>`);
  }
  return context;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function snap(value) {
  return Number(value.toPrecision(12));
}
function NumberField({
  value: valueProp,
  defaultValue,
  onValueChange,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  size = "default",
  disabled = false,
  readOnly = false,
  name,
  format = (value) => value.toLocaleString(),
  children
}) {
  const safeMax = Math.max(min, max);
  const isControlled = valueProp !== void 0;
  const [internalValue, setInternalValue] = React.useState(
    defaultValue
  );
  const value = isControlled ? valueProp : internalValue;
  const [text, setText] = React.useState(
    () => value === void 0 ? "" : format(value)
  );
  const lastSeen = React.useRef(value);
  const update = React.useCallback(
    (next) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      lastSeen.current = next;
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  React.useEffect(() => {
    if (value !== lastSeen.current) {
      lastSeen.current = value;
      setText(value === void 0 ? "" : format(value));
    }
  }, [value, format]);
  const commit = React.useCallback(
    (raw) => {
      const trimmed = raw.trim();
      if (trimmed === "" || trimmed === "-" || trimmed === ".") {
        setText("");
        update(void 0);
        return;
      }
      const parsed = Number(trimmed);
      if (!Number.isFinite(parsed)) {
        setText(value === void 0 ? "" : format(value));
        return;
      }
      const next = snap(clamp(parsed, min, safeMax));
      setText(format(next));
      update(next);
    },
    [format, min, safeMax, update, value]
  );
  const stepBy = React.useCallback(
    (direction) => {
      if (disabled || readOnly) {
        return;
      }
      const base = value ?? clamp(0, min, safeMax);
      const next = snap(clamp(base + direction * step, min, safeMax));
      if (next === value) {
        return;
      }
      setText(format(next));
      update(next);
    },
    [disabled, format, min, safeMax, readOnly, step, update, value]
  );
  return /* @__PURE__ */ jsxs(
    NumberFieldContext.Provider,
    {
      value: {
        value,
        text,
        size,
        disabled,
        readOnly,
        min,
        max: safeMax,
        setText,
        commit,
        step: stepBy
      },
      children: [
        name != null && /* @__PURE__ */ jsx(
          "input",
          {
            type: "hidden",
            name,
            value: value === void 0 ? "" : String(value),
            disabled
          }
        ),
        children
      ]
    }
  );
}
function NumberFieldGroup({
  className,
  ...props
}) {
  const { size, disabled } = useNumberFieldContext("NumberFieldGroup");
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "number-field-group",
      "data-size": size,
      "data-disabled": disabled ? "" : void 0,
      className: cn(
        "group/number-field flex h-11 w-full min-w-0 items-center gap-0.5 rounded-lg border border-input bg-background px-1 transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-disabled:bg-input/50 data-disabled:opacity-50 dark:bg-input/30 dark:data-disabled:bg-input/80 data-[size=sm]:h-9 data-[size=lg]:h-12",
        className
      ),
      ...props
    }
  );
}
function NumberFieldStepper({
  direction,
  className,
  children,
  ...props
}) {
  const { step, disabled, readOnly, value, min, max } = useNumberFieldContext(
    "NumberFieldStepper"
  );
  const outOfRange = direction === -1 ? value !== void 0 && value <= min : value !== void 0 && value >= max;
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "icon-xs",
      disabled: disabled || readOnly || outOfRange,
      "aria-label": direction === -1 ? "Decrease" : "Increase",
      onClick: () => step(direction),
      className: cn("shrink-0 text-muted-foreground hover:text-foreground", className),
      ...props,
      children: children ?? (direction === -1 ? /* @__PURE__ */ jsx(MinusIcon, {}) : /* @__PURE__ */ jsx(PlusIcon, {}))
    }
  );
}
function NumberFieldDecrement(props) {
  return /* @__PURE__ */ jsx(NumberFieldStepper, { direction: -1, ...props });
}
function NumberFieldIncrement(props) {
  return /* @__PURE__ */ jsx(NumberFieldStepper, { direction: 1, ...props });
}
function NumberFieldInput({
  className,
  ...props
}) {
  const { text, setText, commit, step, disabled } = useNumberFieldContext(
    "NumberFieldInput"
  );
  return /* @__PURE__ */ jsx(
    Input,
    {
      type: "text",
      inputMode: "decimal",
      "data-slot": "number-field-input",
      value: text,
      disabled,
      onChange: (event) => setText(event.target.value),
      onBlur: (event) => commit(event.target.value),
      onKeyDown: (event) => {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          step(1);
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          step(-1);
        }
      },
      className: cn(
        "h-full flex-1 border-0 bg-transparent px-1 text-center text-sm tabular-nums shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      ),
      ...props
    }
  );
}
export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput
};
//# sourceMappingURL=number-field.js.map