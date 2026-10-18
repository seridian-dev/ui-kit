"use client";
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

// src/components/ui/animated-list.tsx
var animated_list_exports = {};
__export(animated_list_exports, {
  AnimatedList: () => AnimatedList,
  AnimatedListItem: () => AnimatedListItem
});
module.exports = __toCommonJS(animated_list_exports);
var import_react = __toESM(require("react"), 1);
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react2.motion.div,
    {
      "data-slot": "animated-list-item",
      ...animations,
      layout: true,
      className: "mx-auto w-full",
      children
    }
  );
}
var AnimatedList = import_react.default.memo(
  ({ children, className, delay = 1e3, ...props }) => {
    const [index, setIndex] = (0, import_react.useState)(0);
    const childrenArray = (0, import_react.useMemo)(
      () => import_react.default.Children.toArray(children),
      [children]
    );
    (0, import_react.useEffect)(() => {
      let timeout = null;
      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }
      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [index, delay, childrenArray.length]);
    const itemsToShow = (0, import_react.useMemo)(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        "data-slot": "animated-list",
        className: (0, import_utils.cn)(`flex flex-col items-center gap-4`, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: itemsToShow.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedListItem, { children: item }, item.key)) })
      }
    );
  }
);
AnimatedList.displayName = "AnimatedList";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedList,
  AnimatedListItem
});
//# sourceMappingURL=animated-list.cjs.map