"use client";
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

// src/components/ui/dock.tsx
var dock_exports = {};
__export(dock_exports, {
  Dock: () => Dock,
  DockIcon: () => DockIcon
});
module.exports = __toCommonJS(dock_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var DockContext = (0, import_react.createContext)(null);
function Dock({
  children,
  className,
  baseSize = 40,
  magnification = 64,
  distance = 140
}) {
  const mouseX = (0, import_react2.useMotionValue)(Infinity);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DockContext.Provider, { value: { mouseX, baseSize, magnification, distance }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.motion.div,
    {
      "data-slot": "dock",
      onMouseMove: (e) => mouseX.set(e.clientX),
      onMouseLeave: () => mouseX.set(Infinity),
      className: (0, import_utils.cn)(
        "mx-auto flex h-16 w-fit items-end gap-2 rounded-2xl border bg-card/70 px-3 pb-2 backdrop-blur-xl",
        className
      ),
      children
    }
  ) });
}
function DockIcon({ children, className, label }) {
  const ref = (0, import_react.useRef)(null);
  const reducedMotion = (0, import_react2.useReducedMotion)();
  const fallbackX = (0, import_react2.useMotionValue)(Infinity);
  const ctx = (0, import_react.useContext)(DockContext);
  const mouseX = ctx?.mouseX ?? fallbackX;
  const baseSize = ctx?.baseSize ?? 40;
  const magnification = ctx?.magnification ?? 64;
  const distance = ctx?.distance ?? 140;
  const distanceFromCursor = (0, import_react2.useTransform)(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - bounds.x - bounds.width / 2;
  });
  const sizeTarget = (0, import_react2.useTransform)(
    distanceFromCursor,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );
  const size = (0, import_react2.useSpring)(sizeTarget, {
    mass: 0.1,
    stiffness: 160,
    damping: 13
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.motion.div,
    {
      ref,
      "data-slot": "dock-icon",
      "aria-label": label,
      style: reducedMotion ? { width: baseSize, height: baseSize } : { width: size, height: size },
      className: (0, import_utils.cn)(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground",
        className
      ),
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dock,
  DockIcon
});
//# sourceMappingURL=dock.cjs.map