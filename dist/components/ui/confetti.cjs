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

// src/components/ui/confetti.tsx
var confetti_exports = {};
__export(confetti_exports, {
  Confetti: () => Confetti,
  ConfettiButton: () => ConfettiButton
});
module.exports = __toCommonJS(confetti_exports);
var import_react = require("react");
var import_canvas_confetti = __toESM(require("canvas-confetti"), 1);
var import_button = require("./button.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var ConfettiContext = (0, import_react.createContext)({});
function Confetti({
  ref,
  options,
  globalOptions = { resize: true, useWorker: true },
  manualstart = false,
  children,
  ...props
}) {
  const instanceRef = (0, import_react.useRef)(null);
  const canvasRef = (0, import_react.useCallback)(
    (node) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = import_canvas_confetti.default.create(node, {
          ...globalOptions,
          resize: true
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions]
  );
  const fire = (0, import_react.useCallback)(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [options]
  );
  const api = (0, import_react.useMemo)(() => ({ fire }), [fire]);
  (0, import_react.useImperativeHandle)(ref, () => api, [api]);
  (0, import_react.useEffect)(() => {
    if (!manualstart) {
      ;
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error("Confetti effect error:", error);
        }
      })();
    }
  }, [manualstart, fire]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ConfettiContext.Provider, { value: api, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { "data-slot": "confetti", ref: canvasRef, ...props }),
    children
  ] });
}
function ConfettiButton({
  options,
  children,
  ...props
}) {
  const handleClick = async (event) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await (0, import_canvas_confetti.default)({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        }
      });
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { "data-slot": "confetti-button", onClick: handleClick, ...props, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Confetti,
  ConfettiButton
});
//# sourceMappingURL=confetti.cjs.map