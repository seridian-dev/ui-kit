"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/hover-card.tsx
var hover_card_exports = {};
__export(hover_card_exports, {
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardTrigger: () => HoverCardTrigger
});
module.exports = __toCommonJS(hover_card_exports);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.HoverCard.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.HoverCard.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.HoverCard.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.HoverCard.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: (0, import_utils.cn)(
        "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
});
//# sourceMappingURL=hover-card.cjs.map