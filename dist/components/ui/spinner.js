// src/components/ui/spinner.tsx
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
var spinnerVariants = cva(
  "inline-flex shrink-0 items-center justify-center text-primary",
  {
    variants: {
      size: {
        sm: "size-4",
        default: "size-6",
        lg: "size-8"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function Spinner({
  className,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      role: "status",
      "data-slot": "spinner",
      "data-size": size,
      className: cn(spinnerVariants({ size, className })),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            className: "size-full animate-spin",
            children: /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeDasharray: "44 63"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading" })
      ]
    }
  );
}
export {
  Spinner,
  spinnerVariants
};
//# sourceMappingURL=spinner.js.map