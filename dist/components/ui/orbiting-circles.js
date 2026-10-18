// src/components/ui/orbiting-circles.tsx
import * as React from "react";
import { cn } from "../../lib/utils.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    path && /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        "data-slot": "orbiting-circles-path",
        className: "pointer-events-none absolute inset-0 size-full",
        children: /* @__PURE__ */ jsx(
          "circle",
          {
            className: "stroke-foreground/10 stroke-1",
            cx: "50%",
            cy: "50%",
            r: radius,
            fill: "none"
          }
        )
      }
    ),
    React.Children.map(children, (child, index) => {
      const angle = 360 / React.Children.count(children) * index;
      return /* @__PURE__ */ jsx(
        "div",
        {
          "data-slot": "orbiting-circle",
          style: {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--angle": angle,
            "--icon-size": `${iconSize}px`
          },
          className: cn(
            `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full`,
            { "[animation-direction:reverse]": reverse },
            className
          ),
          ...props,
          children: child
        }
      );
    })
  ] });
}
export {
  OrbitingCircles
};
//# sourceMappingURL=orbiting-circles.js.map