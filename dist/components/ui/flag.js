// src/components/ui/flag.tsx
import { cn } from "../../lib/utils.js";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    "span",
    {
      role: decorative ? void 0 : "img",
      "aria-hidden": decorative || void 0,
      "aria-label": decorative ? void 0 : alt ?? `${code.toUpperCase()} flag`,
      className: cn(
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
export {
  Flag
};
//# sourceMappingURL=flag.js.map