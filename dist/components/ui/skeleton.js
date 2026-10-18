// src/components/ui/skeleton.tsx
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
export {
  Skeleton
};
//# sourceMappingURL=skeleton.js.map