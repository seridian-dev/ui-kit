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

// src/components/ui/meteors.tsx
var meteors_exports = {};
__export(meteors_exports, {
  Meteors: () => Meteors
});
module.exports = __toCommonJS(meteors_exports);
var import_react = require("react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = (0, import_react.useState)(
    []
  );
  (0, import_react.useEffect)(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s"
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [...meteorStyles].map((style, idx) => (
    // Meteor Head
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        "data-slot": "meteors",
        style: { ...style },
        className: (0, import_utils.cn)(
          "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]",
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "meteor-tail",
            className: "pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-muted-foreground to-transparent"
          }
        )
      },
      idx
    )
  )) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Meteors
});
//# sourceMappingURL=meteors.cjs.map