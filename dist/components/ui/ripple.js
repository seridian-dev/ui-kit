// src/components/ui/ripple.tsx
import * as React from "react";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
var Ripple = React.memo(function Ripple2({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "ripple",
      className: cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      ),
      ...props,
      children: Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";
        return /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "ripple-circle",
            className: `animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl`,
            style: {
              "--i": i,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `var(--foreground)`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)"
            }
          },
          i
        );
      })
    }
  );
});
Ripple.displayName = "Ripple";
export {
  Ripple
};
//# sourceMappingURL=ripple.js.map