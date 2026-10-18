"use client";

// src/components/ui/meteors.tsx
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils.js";
import { Fragment, jsx } from "react/jsx-runtime";
var Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = useState(
    []
  );
  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s"
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);
  return /* @__PURE__ */ jsx(Fragment, { children: [...meteorStyles].map((style, idx) => (
    // Meteor Head
    /* @__PURE__ */ jsx(
      "span",
      {
        "data-slot": "meteors",
        style: { ...style },
        className: cn(
          "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]",
          className
        ),
        children: /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "meteor-tail",
            className: "pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-muted-foreground to-transparent"
          }
        )
      },
      idx
    )
  )) });
};
export {
  Meteors
};
//# sourceMappingURL=meteors.js.map