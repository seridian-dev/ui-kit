// src/components/ui/avatar-circles.tsx
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
var AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "avatar-circles",
      className: cn("z-10 flex -space-x-4 rtl:space-x-reverse", className),
      children: [
        avatarUrls.map((url, index) => /* @__PURE__ */ jsx(
          "a",
          {
            "data-slot": "avatar-circles-item",
            href: url.profileUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsx(
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
        (numPeople ?? 0) > 0 && /* @__PURE__ */ jsxs(
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
export {
  AvatarCircles
};
//# sourceMappingURL=avatar-circles.js.map