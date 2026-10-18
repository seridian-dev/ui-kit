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

// src/components/ui/number-ticker.tsx
var number_ticker_exports = {};
__export(number_ticker_exports, {
  NumberTicker: () => NumberTicker
});
module.exports = __toCommonJS(number_ticker_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}) {
  const ref = (0, import_react.useRef)(null);
  const motionValue = (0, import_react2.useMotionValue)(direction === "down" ? value : startValue);
  const springValue = (0, import_react2.useSpring)(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = (0, import_react2.useInView)(ref, { once: true, margin: "0px" });
  (0, import_react.useEffect)(() => {
    let timer = null;
    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value);
      }, delay * 1e3);
    }
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [motionValue, isInView, delay, value, direction, startValue]);
  (0, import_react.useEffect)(
    () => springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    }),
    [springValue, decimalPlaces]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      ref,
      "data-slot": "number-ticker",
      className: (0, import_utils.cn)("inline-block tracking-wider text-foreground tabular-nums", className),
      ...props,
      children: startValue
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NumberTicker
});
//# sourceMappingURL=number-ticker.cjs.map