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

// src/components/ui/color-picker.tsx
var color_picker_exports = {};
__export(color_picker_exports, {
  ColorPicker: () => ColorPicker
});
module.exports = __toCommonJS(color_picker_exports);
var React = __toESM(require("react"), 1);
var import_react_colorful = require("react-colorful");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_input = require("./input.cjs");
var import_popover = require("./popover.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const Picker = enableAlpha ? import_react_colorful.HexAlphaColorPicker : import_react_colorful.HexColorPicker;
  const bareHex = current.replace(/^#/, "").toUpperCase();
  const shownHex = hexDraft ?? bareHex;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "color-picker",
      className: (0, import_utils.cn)("inline-flex", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.Popover, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_button.Button,
          {
            type: "button",
            variant: "outline",
            "data-slot": "color-picker-trigger",
            "aria-label": `Color: ${current}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  "data-slot": "color-picker-swatch",
                  className: "size-4 shrink-0 rounded-sm border border-border",
                  style: { backgroundColor: current }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-normal text-muted-foreground tabular-nums", children: current }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { className: "text-muted-foreground" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.PopoverContent, { className: "w-64", "data-slot": "color-picker-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Picker,
            {
              color: current,
              onChange: commit,
              className: "w-full",
              "aria-label": "Color saturation and brightness"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                "aria-hidden": "true",
                className: "text-sm text-muted-foreground",
                children: "#"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_input.Input,
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
          presets && presets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              "data-slot": "color-picker-presets",
              className: "flex flex-wrap gap-1",
              children: presets.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorPicker
});
//# sourceMappingURL=color-picker.cjs.map