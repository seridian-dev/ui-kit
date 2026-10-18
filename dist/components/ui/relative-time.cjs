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

// src/components/ui/relative-time.tsx
var relative_time_exports = {};
__export(relative_time_exports, {
  RelativeTime: () => RelativeTime
});
module.exports = __toCommonJS(relative_time_exports);
var React = __toESM(require("react"), 1);
var import_date_fns = require("date-fns");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function RelativeTime({
  date,
  interval = 6e4,
  prefix,
  suffix,
  className,
  ...props
}) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    let intervalId;
    const start = () => {
      if (intervalId === void 0 && interval > 0) {
        intervalId = window.setInterval(() => setNow(Date.now()), interval);
      }
    };
    const stop = () => {
      if (intervalId !== void 0) {
        window.clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        setNow(Date.now());
        start();
      }
    };
    start();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [interval]);
  const dateObject = React.useMemo(() => new Date(date), [date]);
  const isValid = !Number.isNaN(dateObject.getTime());
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "time",
    {
      "data-slot": "relative-time",
      dateTime: isValid ? dateObject.toISOString() : void 0,
      title: isValid ? dateObject.toLocaleString() : void 0,
      className: (0, import_utils.cn)("whitespace-nowrap text-sm text-muted-foreground", className),
      ...props,
      children: [
        prefix,
        isValid ? (0, import_date_fns.formatDistanceToNow)(dateObject, { addSuffix: true }) : null,
        suffix
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RelativeTime
});
//# sourceMappingURL=relative-time.cjs.map