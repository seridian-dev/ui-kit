// src/components/ui/shimmer-button.tsx
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function ShimmerButton({
  shimmerColor = "var(--color-primary-foreground)",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "var(--radius-4xl)",
  background = "var(--color-primary)",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "data-slot": "shimmer-button",
      style: {
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background
      },
      className: cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 text-sm font-medium whitespace-nowrap text-primary-foreground [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]", children: /* @__PURE__ */ jsx("div", { className: "animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]", children: /* @__PURE__ */ jsx("div", { className: "animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" }) }) }),
        children,
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" })
      ]
    }
  );
}
export {
  ShimmerButton
};
//# sourceMappingURL=shimmer-button.js.map