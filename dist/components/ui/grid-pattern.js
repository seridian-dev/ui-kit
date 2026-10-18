// src/components/ui/grid-pattern.tsx
import { useId } from "react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "data-slot": "grid-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${id})` }),
        squares && /* @__PURE__ */ jsx("svg", { x, y, className: "overflow-visible", children: squares.map(([x2, y2]) => /* @__PURE__ */ jsx(
          "rect",
          {
            strokeWidth: "0",
            width: width - 1,
            height: height - 1,
            x: x2 * width + 1,
            y: y2 * height + 1
          },
          `${x2}-${y2}`
        )) })
      ]
    }
  );
}
export {
  GridPattern
};
//# sourceMappingURL=grid-pattern.js.map