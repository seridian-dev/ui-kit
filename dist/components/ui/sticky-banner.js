"use client";

// src/components/ui/sticky-banner.tsx
import { useState } from "react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function StickyBanner({
  dismissible = true,
  onDismiss,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      "data-slot": "sticky-banner",
      className: cn(
        "sticky top-0 z-60 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/75 px-4 py-2.5 text-center text-sm text-primary-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { "data-slot": "sticky-banner-content", className: "flex-1", children }),
        dismissible && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "data-slot": "sticky-banner-dismiss",
            "aria-label": "Dismiss announcement",
            onClick: () => {
              setOpen(false);
              onDismiss?.();
            },
            className: "-mr-1 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsx("path", { d: "M3 3l8 8M11 3l-8 8" })
              }
            )
          }
        )
      ]
    }
  );
}
export {
  StickyBanner
};
//# sourceMappingURL=sticky-banner.js.map