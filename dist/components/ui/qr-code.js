"use client";

// src/components/ui/qr-code.tsx
import * as React from "react";
import { toString as qrToString } from "qrcode";
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
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
    qrToString(value, svgOptions).then((raw) => {
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "qr-code",
      role: "img",
      "aria-label": `QR code for ${value}`,
      className: cn(
        "inline-block text-foreground [&_svg]:block [&_svg]:size-full",
        className
      ),
      style: { width: size, height: size, ...style },
      dangerouslySetInnerHTML: { __html: svg ?? "" },
      ...props
    }
  );
}
export {
  QRCode
};
//# sourceMappingURL=qr-code.js.map