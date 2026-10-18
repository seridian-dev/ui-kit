// src/components/ui/bento-grid.tsx
import { ArrowRightIcon } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { jsx, jsxs } from "react/jsx-runtime";
function BentoGrid({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "bento-grid",
      className: cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      ),
      ...props
    }
  );
}
function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "bento-card",
      className: cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transform-gpu",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { children: background }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: name }),
            /* @__PURE__ */ jsx("p", { className: "max-w-lg text-muted-foreground", children: description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden", children: /* @__PURE__ */ jsx(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ jsxs("a", { href, children: [
            cta,
            /* @__PURE__ */ jsx(ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex", children: /* @__PURE__ */ jsx(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ jsxs("a", { href, children: [
          cta,
          /* @__PURE__ */ jsx(ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 transform-gpu bg-transparent transition-all duration-300 group-hover:bg-foreground/3" })
      ]
    }
  );
}
export {
  BentoCard,
  BentoGrid
};
//# sourceMappingURL=bento-grid.js.map