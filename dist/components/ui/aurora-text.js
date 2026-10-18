"use client";

// src/components/ui/aurora-text.tsx
import { memo } from "react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
var AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`
    };
    return /* @__PURE__ */ jsxs("span", { "data-slot": "aurora-text", className: cn("relative inline-block", className), children: [
      /* @__PURE__ */ jsx("span", { className: "sr-only", children }),
      /* @__PURE__ */ jsx(
        "span",
        {
          "data-slot": "aurora-text-gradient",
          className: "animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent",
          style: gradientStyle,
          "aria-hidden": "true",
          children
        }
      )
    ] });
  }
);
AuroraText.displayName = "AuroraText";
export {
  AuroraText
};
//# sourceMappingURL=aurora-text.js.map