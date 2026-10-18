"use client";

// src/components/ui/image-zoom.tsx
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils.js";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "./dialog.js";
import { jsx, jsxs } from "react/jsx-runtime";
function ImageZoom({ alt, src, className, zoomClassName, ...props }) {
  const reducedMotion = useReducedMotion();
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        "data-slot": "image-zoom-trigger",
        className: "block cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              "data-slot": "image-zoom-thumbnail",
              alt,
              src,
              className: cn("rounded-lg", className),
              ...props
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Zoom image" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DialogContent,
      {
        "aria-describedby": void 0,
        className: "w-fit max-w-[calc(100%-2rem)] bg-transparent p-0 ring-0",
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: alt }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              "data-slot": "image-zoom-content",
              initial: reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 },
              animate: reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 },
              transition: { duration: reducedMotion ? 0.15 : 0.2, ease: "easeOut" },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  "data-slot": "image-zoom-image",
                  alt,
                  src,
                  className: cn(
                    "max-h-[85vh] w-auto max-w-full rounded-lg object-contain",
                    zoomClassName
                  )
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
export {
  ImageZoom
};
//# sourceMappingURL=image-zoom.js.map