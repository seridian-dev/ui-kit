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

// src/components/ui/snippet.tsx
var snippet_exports = {};
__export(snippet_exports, {
  Snippet: () => Snippet
});
module.exports = __toCommonJS(snippet_exports);
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var COPY_RESET_DELAY_MS = 2e3;
function Snippet({
  code,
  children,
  label,
  showPrompt = false,
  className,
  ...props
}) {
  const lines = React.useMemo(() => {
    if (code == null) return null;
    return Array.isArray(code) ? code : [code];
  }, [code]);
  const copyText = React.useMemo(() => {
    if (lines) return lines.join("\n");
    return typeof children === "string" ? children : "";
  }, [lines, children]);
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef(null);
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, COPY_RESET_DELAY_MS);
    } catch {
      setCopied(false);
    }
  }, [copyText]);
  const showCopy = copyText.length > 0;
  const showHeader = showCopy || label != null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "figure",
    {
      "data-slot": "snippet",
      className: (0, import_utils.cn)(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-border bg-muted py-3 text-sm",
        className
      ),
      ...props,
      children: [
        showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "figcaption",
          {
            "data-slot": "snippet-header",
            className: (0, import_utils.cn)(
              "flex items-center gap-2 px-4",
              label == null && "justify-end"
            ),
            children: [
              label != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  "data-slot": "snippet-label",
                  className: "min-w-0 truncate font-mono text-xs text-muted-foreground",
                  children: label
                }
              ),
              showCopy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
                  onClick: () => void handleCopy(),
                  className: "ml-auto",
                  children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckIcon, { className: "text-primary", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CopyIcon, { "aria-hidden": "true" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "pre",
          {
            "data-slot": "snippet-code",
            className: "overflow-x-auto px-4 font-mono text-sm leading-relaxed text-foreground",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: lines ? lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "block whitespace-pre", children: [
              showPrompt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  className: "mr-2 inline-block select-none text-muted-foreground",
                  children: "$"
                }
              ),
              line.length > 0 ? line : "\xA0"
            ] }, index)) : children })
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Snippet
});
//# sourceMappingURL=snippet.cjs.map