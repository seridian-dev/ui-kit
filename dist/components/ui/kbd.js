// src/components/ui/kbd.tsx
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "kbd",
    {
      "data-slot": "kbd",
      className: cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border-b-2 border-b-input bg-muted px-1.5 font-mono text-2xs font-medium text-muted-foreground select-none",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}
export {
  Kbd,
  KbdGroup
};
//# sourceMappingURL=kbd.js.map