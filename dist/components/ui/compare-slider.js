"use client";

// src/components/ui/compare-slider.tsx
import { useRef, useState } from "react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function CompareSlider({
  before,
  after,
  initial = 50,
  label = "Compare before and after",
  className
}) {
  const [position, setPosition] = useState(initial);
  const ref = useRef(null);
  const moveTo = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-slot": "compare-slider",
      onPointerMove: (event) => {
        if (event.buttons === 1) moveTo(event.clientX);
      },
      className: cn(
        "relative aspect-video w-full touch-none overflow-hidden rounded-2xl border select-none",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { "data-slot": "compare-slider-after", className: "absolute inset-0", children: after }),
        /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "compare-slider-before",
            className: "absolute inset-0",
            style: { clipPath: `inset(0 ${100 - position}% 0 0)` },
            children: before
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "compare-slider-divider",
            style: { left: `${position}%` },
            className: "absolute inset-y-0 w-px -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]",
            children: /* @__PURE__ */ jsx(
              "span",
              {
                "data-slot": "compare-slider-handle",
                className: "absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.75",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ jsx("path", { d: "M6 4L2.5 8 6 12M10 4l3.5 4-3.5 4" })
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            "data-slot": "compare-slider-range",
            min: 0,
            max: 100,
            value: position,
            "aria-label": label,
            onChange: (event) => setPosition(Number(event.target.value)),
            className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          }
        )
      ]
    }
  );
}
export {
  CompareSlider
};
//# sourceMappingURL=compare-slider.js.map