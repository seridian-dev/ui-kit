// src/components/ui/empty-state.tsx
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
function EmptyState({
  className,
  title,
  description,
  icon,
  actions,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-8 text-center",
        className
      ),
      ...props,
      children: [
        icon != null && /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "empty-state-icon",
            "aria-hidden": "true",
            className: "text-muted-foreground [&>svg]:size-10",
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex max-w-90 flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsx("h3", { "data-slot": "empty-state-title", className: "font-heading text-base font-medium text-foreground", children: title }),
          description != null && /* @__PURE__ */ jsx("p", { "data-slot": "empty-state-description", className: "text-sm text-muted-foreground", children: description })
        ] }),
        actions != null && /* @__PURE__ */ jsx("div", { "data-slot": "empty-state-actions", className: "mt-1 flex flex-row items-center gap-2", children: actions })
      ]
    }
  );
}
export {
  EmptyState
};
//# sourceMappingURL=empty-state.js.map