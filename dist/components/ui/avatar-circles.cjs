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

// src/components/ui/avatar-circles.tsx
var avatar_circles_exports = {};
__export(avatar_circles_exports, {
  AvatarCircles: () => AvatarCircles
});
module.exports = __toCommonJS(avatar_circles_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "avatar-circles",
      className: (0, import_utils.cn)("z-10 flex -space-x-4 rtl:space-x-reverse", className),
      children: [
        avatarUrls.map((url, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "a",
          {
            "data-slot": "avatar-circles-item",
            href: url.profileUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "img",
              {
                "data-slot": "avatar-circles-image",
                className: "h-10 w-10 rounded-full border-2 border-background",
                src: url.imageUrl,
                width: 40,
                height: 40,
                alt: `Avatar ${index + 1}`
              },
              index
            )
          },
          index
        )),
        (numPeople ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "a",
          {
            "data-slot": "avatar-circles-more",
            className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-foreground text-center text-xs font-medium text-background hover:bg-muted-foreground",
            href: "",
            children: [
              "+",
              numPeople
            ]
          }
        )
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AvatarCircles
});
//# sourceMappingURL=avatar-circles.cjs.map