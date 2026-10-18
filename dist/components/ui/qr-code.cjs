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

// src/components/ui/qr-code.tsx
var qr_code_exports = {};
__export(qr_code_exports, {
  QRCode: () => QRCode
});
module.exports = __toCommonJS(qr_code_exports);
var React = __toESM(require("react"), 1);
var import_qrcode = require("qrcode");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function applyThemeColors(svg, fg, bg) {
  return svg.replace(
    /(fill|stroke)="#(?:000000|000)"/gi,
    (_match, attr) => `${attr}="${fg}"`
  ).replace(
    /(fill|stroke)="#(?:ffffff|fff)"/gi,
    (_match, attr) => `${attr}="${bg}"`
  );
}
function QRCode({
  value,
  size = 160,
  level = "M",
  marginSize = 0,
  fgColor,
  bgColor,
  className,
  style,
  ...props
}) {
  const [svg, setSvg] = React.useState(null);
  const svgOptions = React.useMemo(
    () => ({
      type: "svg",
      width: size,
      margin: marginSize,
      errorCorrectionLevel: level
    }),
    [size, marginSize, level]
  );
  React.useEffect(() => {
    let cancelled = false;
    (0, import_qrcode.toString)(value, svgOptions).then((raw) => {
      if (cancelled) return;
      setSvg(
        applyThemeColors(
          raw,
          fgColor ?? "currentColor",
          bgColor ?? "transparent"
        )
      );
    }).catch(() => {
      if (!cancelled) setSvg(null);
    });
    return () => {
      cancelled = true;
    };
  }, [value, svgOptions, fgColor, bgColor]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "qr-code",
      role: "img",
      "aria-label": `QR code for ${value}`,
      className: (0, import_utils.cn)(
        "inline-block text-foreground [&_svg]:block [&_svg]:size-full",
        className
      ),
      style: { width: size, height: size, ...style },
      dangerouslySetInnerHTML: { __html: svg ?? "" },
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QRCode
});
//# sourceMappingURL=qr-code.cjs.map