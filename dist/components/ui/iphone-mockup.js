// src/components/ui/iphone-mockup.tsx
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function IPhoneMockup({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "iphone-mockup",
      className: cn("relative mx-auto w-70", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            "data-slot": "iphone-mockup-frame",
            className: "relative aspect-[9/19] overflow-hidden rounded-[3rem] border-10 border-neutral-800 bg-background shadow-2xl",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "data-slot": "iphone-mockup-dynamic-island",
                  className: "absolute top-2.5 left-1/2 z-20 h-6.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
                }
              ),
              /* @__PURE__ */ jsx("div", { "data-slot": "iphone-mockup-screen", className: "absolute inset-0", children })
            ]
          }
        )
      ]
    }
  );
}
export {
  IPhoneMockup
};
//# sourceMappingURL=iphone-mockup.js.map