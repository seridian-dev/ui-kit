"use client";

// src/components/ui/snippet.tsx
import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "figure",
    {
      "data-slot": "snippet",
      className: cn(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-border bg-muted py-3 text-sm",
        className
      ),
      ...props,
      children: [
        showHeader && /* @__PURE__ */ jsxs(
          "figcaption",
          {
            "data-slot": "snippet-header",
            className: cn(
              "flex items-center gap-2 px-4",
              label == null && "justify-end"
            ),
            children: [
              label != null && /* @__PURE__ */ jsx(
                "span",
                {
                  "data-slot": "snippet-label",
                  className: "min-w-0 truncate font-mono text-xs text-muted-foreground",
                  children: label
                }
              ),
              showCopy && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
                  onClick: () => void handleCopy(),
                  className: "ml-auto",
                  children: copied ? /* @__PURE__ */ jsx(CheckIcon, { className: "text-primary", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(CopyIcon, { "aria-hidden": "true" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "pre",
          {
            "data-slot": "snippet-code",
            className: "overflow-x-auto px-4 font-mono text-sm leading-relaxed text-foreground",
            children: /* @__PURE__ */ jsx("code", { children: lines ? lines.map((line, index) => /* @__PURE__ */ jsxs("span", { className: "block whitespace-pre", children: [
              showPrompt && /* @__PURE__ */ jsx(
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
export {
  Snippet
};
//# sourceMappingURL=snippet.js.map