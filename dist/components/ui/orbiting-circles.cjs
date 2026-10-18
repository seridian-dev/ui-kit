"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/orbiting-circles.tsx
var orbiting_circles_exports = {};
__export(orbiting_circles_exports, {
  OrbitingCircles: () => OrbitingCircles
});
module.exports = __toCommonJS(orbiting_circles_exports);
var React = __toESM(require("react"), 1);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        "data-slot": "orbiting-circles-path",
        className: "pointer-events-none absolute inset-0 size-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "circle",
          {
            className: "stroke-foreground/10 stroke-1",
            cx: "50%",
            cy: "50%",
            r: radius,
            fill: "none"
          }
        )
      }
    ),
    React.Children.map(children, (child, index) => {
      const angle = 360 / React.Children.count(children) * index;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          "data-slot": "orbiting-circle",
          style: {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--angle": angle,
            "--icon-size": `${iconSize}px`
          },
          className: (0, import_utils.cn)(
            `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full`,
            { "[animation-direction:reverse]": reverse },
            className
          ),
          ...props,
          children: child
        }
      );
    })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrbitingCircles
});
//# sourceMappingURL=orbiting-circles.cjs.map