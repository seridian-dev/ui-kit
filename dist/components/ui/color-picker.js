"use client";

// src/components/ui/color-picker.tsx
import * as React from "react";
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./popover.js";
import { jsx, jsxs } from "react/jsx-runtime";
function parseHex(raw, allowAlpha) {
  const bare = raw.replace(/^#+/, "").replace(/[^0-9a-fA-F]/g, "").slice(0, allowAlpha ? 8 : 6);
  const isValid = allowAlpha ? bare.length === 6 || bare.length === 8 : bare.length === 6;
  if (!isValid) return null;
  return `#${bare.toLowerCase()}`;
}
function ColorPicker({
  value: controlledValue,
  defaultValue = "#000000",
  onValueChange,
  presets,
  enableAlpha = false,
  disabled = false,
  className,
  ...props
}) {
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const current = isControlled ? controlledValue : internalValue;
  const [hexDraft, setHexDraft] = React.useState(null);
  React.useEffect(() => {
    setHexDraft(null);
  }, [current]);
  const commit = React.useCallback(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  const Picker = enableAlpha ? HexAlphaColorPicker : HexColorPicker;
  const bareHex = current.replace(/^#/, "").toUpperCase();
  const shownHex = hexDraft ?? bareHex;
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "color-picker",
      className: cn("inline-flex", className),
      ...props,
      children: /* @__PURE__ */ jsxs(Popover, { children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, disabled, children: /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            "data-slot": "color-picker-trigger",
            "aria-label": `Color: ${current}`,
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": "true",
                  "data-slot": "color-picker-swatch",
                  className: "size-4 shrink-0 rounded-sm border border-border",
                  style: { backgroundColor: current }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-normal text-muted-foreground tabular-nums", children: current }),
              /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(PopoverContent, { className: "w-64", "data-slot": "color-picker-content", children: [
          /* @__PURE__ */ jsx(
            Picker,
            {
              color: current,
              onChange: commit,
              className: "w-full",
              "aria-label": "Color saturation and brightness"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                "aria-hidden": "true",
                className: "text-sm text-muted-foreground",
                children: "#"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                "data-slot": "color-picker-hex-input",
                value: shownHex,
                maxLength: enableAlpha ? 8 : 6,
                spellCheck: false,
                className: "font-mono uppercase",
                onChange: (event) => {
                  const bare = event.target.value.replace(/^#+/, "").replace(/[^0-9a-fA-F]/g, "").slice(0, enableAlpha ? 8 : 6);
                  setHexDraft(bare);
                  const parsed = parseHex(bare, enableAlpha);
                  if (parsed) commit(parsed);
                },
                onBlur: () => setHexDraft(null)
              }
            )
          ] }),
          presets && presets.length > 0 && /* @__PURE__ */ jsx(
            "div",
            {
              "data-slot": "color-picker-presets",
              className: "flex flex-wrap gap-1",
              children: presets.map((preset) => /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  "data-slot": "color-picker-preset",
                  "aria-label": `Use color ${preset}`,
                  title: preset,
                  className: "size-6 shrink-0 rounded-md border border-border outline-none transition-transform hover:scale-110 focus-visible:ring-3 focus-visible:ring-ring/50",
                  style: { backgroundColor: preset },
                  onClick: () => commit(preset)
                },
                preset
              ))
            }
          )
        ] })
      ] })
    }
  );
}
export {
  ColorPicker
};
//# sourceMappingURL=color-picker.js.map