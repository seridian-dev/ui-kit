// src/components/ui/separator.tsx
import { Separator as SeparatorPrimitive } from "radix-ui";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}
export {
  Separator
};
//# sourceMappingURL=separator.js.map