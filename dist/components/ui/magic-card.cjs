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

// src/components/ui/magic-card.tsx
var magic_card_exports = {};
__export(magic_card_exports, {
  MagicCard: () => MagicCard
});
module.exports = __toCommonJS(magic_card_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function isOrbMode(props) {
  return props.mode === "orb";
}
function MagicCard(props) {
  const {
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
    mode = "gradient"
  } = props;
  const glowFrom = isOrbMode(props) ? props.glowFrom ?? "#ee4f27" : "#ee4f27";
  const glowTo = isOrbMode(props) ? props.glowTo ?? "#6b21ef" : "#6b21ef";
  const glowAngle = isOrbMode(props) ? props.glowAngle ?? 90 : 90;
  const glowSize = isOrbMode(props) ? props.glowSize ?? 420 : 420;
  const glowBlur = isOrbMode(props) ? props.glowBlur ?? 60 : 60;
  const glowOpacity = isOrbMode(props) ? props.glowOpacity ?? 0.9 : 0.9;
  const mouseX = (0, import_react2.useMotionValue)(-gradientSize);
  const mouseY = (0, import_react2.useMotionValue)(-gradientSize);
  const orbX = (0, import_react2.useSpring)(mouseX, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbY = (0, import_react2.useSpring)(mouseY, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbVisible = (0, import_react2.useSpring)(0, { stiffness: 300, damping: 35 });
  const modeRef = (0, import_react.useRef)(mode);
  const glowOpacityRef = (0, import_react.useRef)(glowOpacity);
  const gradientSizeRef = (0, import_react.useRef)(gradientSize);
  (0, import_react.useEffect)(() => {
    modeRef.current = mode;
  }, [mode]);
  (0, import_react.useEffect)(() => {
    glowOpacityRef.current = glowOpacity;
  }, [glowOpacity]);
  (0, import_react.useEffect)(() => {
    gradientSizeRef.current = gradientSize;
  }, [gradientSize]);
  const reset = (0, import_react.useCallback)(
    (reason = "leave") => {
      const currentMode = modeRef.current;
      if (currentMode === "orb") {
        if (reason === "enter") orbVisible.set(glowOpacityRef.current);
        else orbVisible.set(0);
        return;
      }
      const off = -gradientSizeRef.current;
      mouseX.set(off);
      mouseY.set(off);
    },
    [mouseX, mouseY, orbVisible]
  );
  const handlePointerMove = (0, import_react.useCallback)(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );
  (0, import_react.useEffect)(() => {
    reset("init");
  }, [reset]);
  (0, import_react.useEffect)(() => {
    const handleGlobalPointerOut = (e) => {
      if (!e.relatedTarget) reset("global");
    };
    const handleBlur = () => reset("global");
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset("global");
    };
    window.addEventListener("pointerout", handleGlobalPointerOut);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reset]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react2.motion.div,
    {
      "data-slot": "magic-card",
      className: (0, import_utils.cn)(
        "group relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        className
      ),
      onPointerMove: handlePointerMove,
      onPointerLeave: () => reset("leave"),
      onPointerEnter: () => reset("enter"),
      style: {
        background: import_react2.useMotionTemplate`
          linear-gradient(var(--color-background) 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            var(--color-border) 100%
          ) border-box
        `
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-background absolute inset-px z-20 rounded-[inherit]" }),
        mode === "gradient" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.div,
          {
            suppressHydrationWarning: true,
            className: "pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: import_react2.useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${gradientColor},
                transparent 100%
              )
            `,
              opacity: gradientOpacity
            }
          }
        ),
        mode === "orb" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.div,
          {
            suppressHydrationWarning: true,
            "aria-hidden": "true",
            className: "pointer-events-none absolute z-30 mix-blend-multiply dark:mix-blend-screen",
            style: {
              width: glowSize,
              height: glowSize,
              x: orbX,
              y: orbY,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: 9999,
              filter: `blur(${glowBlur}px)`,
              opacity: orbVisible,
              background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
              willChange: "transform, opacity"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "magic-card-content", className: "relative z-40", children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MagicCard
});
//# sourceMappingURL=magic-card.cjs.map