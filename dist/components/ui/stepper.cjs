"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/stepper.tsx
var stepper_exports = {};
__export(stepper_exports, {
  Stepper: () => Stepper
});
module.exports = __toCommonJS(stepper_exports);
var import_react = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function Stepper({ steps, current, onStepClick, className }) {
  const reducedMotion = (0, import_react.useReducedMotion)();
  const progress = steps.length > 1 ? current / (steps.length - 1) : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "ol",
    {
      "data-slot": "stepper",
      className: (0, import_utils.cn)("relative flex w-full justify-between", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "stepper-track",
            className: "absolute top-4 right-4 left-4 -z-10 h-0.5 bg-border",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react.motion.div,
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
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "li",
            {
              "data-slot": "stepper-step",
              className: "flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    "data-slot": "stepper-step-trigger",
                    disabled: !interactive,
                    onClick: () => onStepClick?.(i),
                    "aria-current": active ? "step" : void 0,
                    className: (0, import_utils.cn)(
                      "grid size-8 place-items-center rounded-full border-2 bg-background text-xs font-medium transition-colors",
                      done && "border-primary bg-primary text-primary-foreground",
                      active && "border-primary text-primary",
                      !done && !active && "border-border text-muted-foreground",
                      interactive && "cursor-pointer"
                    ),
                    children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 7.5l3 3 6-6" })
                      }
                    ) : i + 1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "span",
                  {
                    "data-slot": "stepper-step-label",
                    className: (0, import_utils.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stepper
});
//# sourceMappingURL=stepper.cjs.map