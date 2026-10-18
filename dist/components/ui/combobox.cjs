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

// src/components/ui/combobox.tsx
var combobox_exports = {};
__export(combobox_exports, {
  Combobox: () => Combobox,
  ComboboxClear: () => ComboboxClear,
  ComboboxContent: () => ComboboxContent,
  ComboboxItem: () => ComboboxItem,
  ComboboxTrigger: () => ComboboxTrigger
});
module.exports = __toCommonJS(combobox_exports);
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_badge = require("./badge.cjs");
var import_button = require("./button.cjs");
var import_command = require("./command.cjs");
var import_popover = require("./popover.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var ComboboxContext = React.createContext(null);
function useCombobox(part) {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error(`<${part}> must be used within <Combobox>`);
  }
  return context;
}
function toArray(value) {
  if (value === null || value === void 0) return [];
  return Array.isArray(value) ? value : [value];
}
function Combobox(props) {
  const {
    multiple = false,
    options,
    disabled = false,
    placeholder,
    children
  } = props;
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(
    () => toArray(props.defaultValue)
  );
  const labelsRef = React.useRef(/* @__PURE__ */ new Map());
  const [, bumpLabels] = React.useReducer((count) => count + 1, 0);
  const selected = props.value !== void 0 ? toArray(props.value) : internalValue;
  const setSelected = (next) => {
    if (props.value === void 0) {
      setInternalValue(next);
    }
    if (props.multiple) {
      props.onValueChange?.(next);
    } else {
      props.onValueChange?.(next[0] ?? null);
    }
  };
  const toggle = (value) => {
    if (!multiple) {
      setSelected([value]);
      setOpen(false);
      return;
    }
    setSelected(
      selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]
    );
  };
  const remove = (value) => {
    setSelected(selected.filter((item) => item !== value));
  };
  const removeLast = () => {
    if (selected.length > 0) {
      setSelected(selected.slice(0, -1));
    }
  };
  const clear = () => {
    setSelected([]);
  };
  const registerLabel = React.useCallback(
    (value, label) => {
      if (labelsRef.current.get(value) === label) return;
      labelsRef.current.set(value, label);
      bumpLabels();
    },
    [bumpLabels]
  );
  const getLabel = (value) => {
    const registered = labelsRef.current.get(value);
    if (registered !== void 0) return registered;
    return options?.find((option) => option.value === value)?.label ?? value;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ComboboxContext.Provider,
    {
      value: {
        multiple,
        disabled,
        selected,
        options,
        placeholder,
        toggle,
        remove,
        removeLast,
        clear,
        close: () => setOpen(false),
        registerLabel,
        getLabel
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover, { open, onOpenChange: setOpen, children })
    }
  );
}
function ComboboxTrigger({
  className,
  children,
  disabled,
  ...props
}) {
  const {
    multiple,
    disabled: rootDisabled,
    selected,
    placeholder,
    getLabel,
    remove
  } = useCombobox("ComboboxTrigger");
  const isEmpty = selected.length === 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_button.Button,
    {
      type: "button",
      variant: "outline",
      disabled: disabled || rootDisabled,
      "data-slot": "combobox-trigger",
      "data-placeholder": isEmpty || void 0,
      className: (0, import_utils.cn)(
        "min-h-11 w-full justify-between px-3 font-normal data-placeholder:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1 text-left", children: multiple ? isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "min-w-0 truncate text-muted-foreground", children: placeholder }) : selected.map((itemValue) => {
          const label = getLabel(itemValue);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_badge.Badge, { variant: "secondary", className: "h-7 text-sm", children: [
            label,
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                role: "button",
                tabIndex: -1,
                "aria-label": `Remove ${typeof label === "string" ? label : itemValue}`,
                "data-slot": "combobox-badge-remove",
                onClick: (event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  remove(itemValue);
                },
                className: "flex size-3.5 items-center justify-center rounded-sm transition-colors hover:bg-foreground/20",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XIcon, { className: "size-3" })
              }
            )
          ] }, itemValue);
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "min-w-0 truncate", children: isEmpty ? placeholder : getLabel(selected[0] ?? "") }) }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/button:rotate-180" })
      ]
    }
  ) });
}
function ComboboxContent({
  className,
  searchPlaceholder = "Search...",
  children,
  ...props
}) {
  const { multiple, selected, options, removeLast } = useCombobox(
    "ComboboxContent"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_popover.PopoverContent,
    {
      "data-slot": "combobox-content",
      className: (0, import_utils.cn)(
        "w-(--radix-popover-trigger-width) min-w-(--radix-popover-trigger-width) max-w-[min(28rem,calc(100vw-2rem))] p-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_command.Command, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_command.CommandInput,
          {
            placeholder: searchPlaceholder,
            onKeyDown: (event) => {
              if (event.key === "Backspace" && event.currentTarget.value === "" && multiple && selected.length > 0) {
                event.preventDefault();
                removeLast();
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_command.CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_command.CommandEmpty, { children: "No results found." }),
          options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ComboboxItem,
            {
              value: option.value,
              disabled: option.disabled,
              children: option.label
            },
            option.value
          )),
          children
        ] })
      ] })
    }
  );
}
function ComboboxItem({
  value,
  children,
  disabled = false,
  className,
  onSelect,
  ...props
}) {
  const { selected, disabled: rootDisabled, toggle, registerLabel } = useCombobox("ComboboxItem");
  const isSelected = selected.includes(value);
  React.useEffect(() => {
    registerLabel(value, children);
  }, [value, children, registerLabel]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_command.CommandItem,
    {
      value,
      disabled: disabled || rootDisabled,
      "data-slot": "combobox-item",
      "data-state": isSelected ? "checked" : "unchecked",
      onSelect: () => {
        onSelect?.(value);
        toggle(value);
      },
      className: (0, import_utils.cn)("min-h-10 gap-0 data-[state=checked]:bg-muted/50", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            "data-slot": "combobox-item-indicator",
            className: "mr-2 flex size-4 shrink-0 items-center justify-center",
            children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckIcon, { className: "size-4" })
          }
        ),
        children
      ]
    }
  );
}
function ComboboxClear({ className, ...props }) {
  const { selected, disabled, clear } = useCombobox("ComboboxClear");
  if (disabled || selected.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      role: "button",
      tabIndex: -1,
      "data-slot": "combobox-clear",
      "aria-label": "Clear selection",
      onClick: (event) => {
        event.stopPropagation();
        event.preventDefault();
        clear();
      },
      className: (0, import_utils.cn)(
        "flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XIcon, { className: "size-3.5" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger
});
//# sourceMappingURL=combobox.cjs.map