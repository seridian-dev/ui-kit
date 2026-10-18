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

// src/components/ui/flag.tsx
var flag_exports = {};
__export(flag_exports, {
  Flag: () => Flag
});
module.exports = __toCommonJS(flag_exports);
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var devWarnedInvalidCode = false;
function Flag({
  country,
  ratio = "4x3",
  decorative = false,
  alt,
  rounded = false,
  className,
  style,
  ...props
}) {
  const code = country.trim().toLowerCase();
  const isValidCode = /^[a-z]{2}$/.test(code);
  if (process.env.NODE_ENV !== "production" && !devWarnedInvalidCode && !isValidCode) {
    devWarnedInvalidCode = true;
    console.warn(
      `<Flag> expected a 2-letter ISO 3166-1 alpha-2 code, got "${country}" \u2014 the flag will render blank.`
    );
  }
  const src = `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/${ratio}/${code}.svg`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      role: decorative ? void 0 : "img",
      "aria-hidden": decorative || void 0,
      "aria-label": decorative ? void 0 : alt ?? `${code.toUpperCase()} flag`,
      className: (0, import_utils.cn)(
        "inline-block bg-contain bg-center bg-no-repeat align-middle leading-none",
        ratio === "4x3" ? "aspect-[4/3] w-[1.333em]" : "aspect-square w-[1em]",
        rounded && "overflow-hidden rounded-sm",
        className
      ),
      style: {
        backgroundImage: isValidCode ? `url("${src}")` : void 0,
        ...style
      },
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Flag
});
//# sourceMappingURL=flag.cjs.map