// src/components/ui/marquee.tsx
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "marquee",
      className: cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      ),
      ...props,
      children: Array.from({ length: repeat }).map((_, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex shrink-0 justify-around gap-(--gap)",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          ),
          children
        },
        i
      ))
    }
  );
}
export {
  Marquee
};
//# sourceMappingURL=marquee.js.map