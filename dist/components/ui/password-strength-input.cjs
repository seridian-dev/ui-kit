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

// src/components/ui/password-strength-input.tsx
var password_strength_input_exports = {};
__export(password_strength_input_exports, {
  PasswordStrengthInput: () => PasswordStrengthInput
});
module.exports = __toCommonJS(password_strength_input_exports);
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_input = require("./input.cjs");
var import_label = require("./label.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function PasswordStrengthInput({
  className,
  ...props
}) {
  const id = (0, import_react.useId)();
  const [password, setPassword] = (0, import_react.useState)("");
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" }
    ];
    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text
    }));
  };
  const strength = checkStrength(password);
  const strengthScore = (0, import_react.useMemo)(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);
  const getStrengthColor = (score) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };
  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { "data-slot": "password-strength-input", className, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_label.Label, { htmlFor: id, children: "Input with password strength indicator" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_input.Input,
          {
            id,
            className: "pe-9",
            placeholder: "Password",
            type: isVisible ? "text" : "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            "aria-describedby": `${id}-description`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            "data-slot": "password-strength-toggle",
            className: "text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            type: "button",
            onClick: toggleVisibility,
            "aria-label": isVisible ? "Hide password" : "Show password",
            "aria-pressed": isVisible,
            "aria-controls": id,
            children: isVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.EyeOffIcon, { size: 16, "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.EyeIcon, { size: 16, "aria-hidden": "true" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        "data-slot": "password-strength-progress",
        className: "bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full",
        role: "progressbar",
        "aria-valuenow": strengthScore,
        "aria-valuemin": 0,
        "aria-valuemax": 4,
        "aria-label": "Password strength",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_utils.cn)(
              "h-full transition-all duration-500 ease-out",
              getStrengthColor(strengthScore)
            ),
            style: { width: `${strengthScore / 4 * 100}%` }
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "p",
      {
        id: `${id}-description`,
        className: "text-foreground mb-2 text-sm font-medium",
        children: [
          getStrengthText(strengthScore),
          ". Must contain:"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "ul",
      {
        "data-slot": "password-strength-requirements",
        className: "space-y-1.5",
        "aria-label": "Password requirements",
        children: strength.map((req, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "flex items-center gap-2", children: [
          req.met ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_lucide_react.CheckIcon,
            {
              size: 16,
              className: "text-emerald-500",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_lucide_react.XIcon,
            {
              size: 16,
              className: "text-muted-foreground/80",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "span",
            {
              className: (0, import_utils.cn)(
                "text-xs",
                req.met ? "text-emerald-600" : "text-muted-foreground"
              ),
              children: [
                req.text,
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: req.met ? " - Requirement met" : " - Requirement not met" })
              ]
            }
          )
        ] }, index))
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PasswordStrengthInput
});
//# sourceMappingURL=password-strength-input.cjs.map