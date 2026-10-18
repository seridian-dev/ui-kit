// src/components/ui/animated-shiny-text.tsx
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
var AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "animated-shiny-text",
      style: {
        "--shiny-width": `${shimmerWidth}px`
      },
      className: cn(
        "mx-auto max-w-md text-muted-foreground",
        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-linear-to-r from-transparent via-foreground/80 via-50% to-transparent",
        className
      ),
      ...props,
      children
    }
  );
};
export {
  AnimatedShinyText
};
//# sourceMappingURL=animated-shiny-text.js.map