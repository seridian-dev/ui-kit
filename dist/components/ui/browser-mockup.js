// src/components/ui/browser-mockup.tsx
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function BrowserMockup({
  url = "velora.dev",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "browser-mockup",
      className: cn(
        "overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            "data-slot": "browser-mockup-toolbar",
            className: "flex items-center gap-3 border-b border-border/60 px-4 py-3",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-red-500/70" }),
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-yellow-500/70" }),
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-green-500/70" })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  "data-slot": "browser-mockup-url",
                  className: "mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-muted/60 text-xs text-muted-foreground",
                  children: url
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-14" })
            ]
          }
        ),
        children
      ]
    }
  );
}
export {
  BrowserMockup
};
//# sourceMappingURL=browser-mockup.js.map