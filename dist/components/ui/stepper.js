"use client";

// src/components/ui/stepper.tsx
import { useReducedMotion, motion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function Stepper({ steps, current, onStepClick, className }) {
  const reducedMotion = useReducedMotion();
  const progress = steps.length > 1 ? current / (steps.length - 1) : 0;
  return /* @__PURE__ */ jsxs(
    "ol",
    {
      "data-slot": "stepper",
      className: cn("relative flex w-full justify-between", className),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "stepper-track",
            className: "absolute top-4 right-4 left-4 -z-10 h-0.5 bg-border",
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                "data-slot": "stepper-track-fill",
                initial: false,
                animate: { scaleX: progress },
                transition: { duration: reducedMotion ? 0 : 0.4, ease: "easeOut" },
                className: "h-full origin-left bg-gradient-to-r from-primary to-primary/60"
              }
            )
          }
        ),
        steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          const interactive = Boolean(onStepClick) && done;
          return /* @__PURE__ */ jsxs(
            "li",
            {
              "data-slot": "stepper-step",
              className: "flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "data-slot": "stepper-step-trigger",
                    disabled: !interactive,
                    onClick: () => onStepClick?.(i),
                    "aria-current": active ? "step" : void 0,
                    className: cn(
                      "grid size-8 place-items-center rounded-full border-2 bg-background text-xs font-medium transition-colors",
                      done && "border-primary bg-primary text-primary-foreground",
                      active && "border-primary text-primary",
                      !done && !active && "border-border text-muted-foreground",
                      interactive && "cursor-pointer"
                    ),
                    children: done ? /* @__PURE__ */ jsx(
                      "svg",
                      {
                        width: "13",
                        height: "13",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.25",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": true,
                        children: /* @__PURE__ */ jsx("path", { d: "M2.5 7.5l3 3 6-6" })
                      }
                    ) : i + 1
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    "data-slot": "stepper-step-label",
                    className: cn(
                      "text-xs whitespace-nowrap",
                      active ? "font-medium text-foreground" : "text-muted-foreground"
                    ),
                    children: step
                  }
                )
              ]
            },
            step
          );
        })
      ]
    }
  );
}
export {
  Stepper
};
//# sourceMappingURL=stepper.js.map