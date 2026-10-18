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

// src/components/ui/timer.tsx
var timer_exports = {};
__export(timer_exports, {
  Timer: () => Timer,
  TimerDisplay: () => TimerDisplay,
  TimerIcon: () => TimerIcon,
  TimerRoot: () => TimerRoot,
  useTimer: () => useTimer
});
module.exports = __toCommonJS(timer_exports);
var import_react = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var timerVariants = (0, import_class_variance_authority.cva)(
  [
    "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200",
    ""
  ],
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border border-border shadow-[0_2px_4px_rgba(0,0,0,0.02),_0px_1px_2px_rgba(0,0,0,0.04)] shadow-[inset_0px_-2.10843px_0px_0px_var(--color-muted),_0px_1.20482px_6.3253px_0px_var(--color-muted)]",
        outline: "border border-input bg-background text-foreground  shadow-[0px_1px_0px_0px_hsla(0,_0%,_0%,_0.02)_inset,_0px_0px_0px_1px_hsla(0,_0%,_0%,_0.02)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.25)]",
        ghost: "bg-transparent text-foreground ",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20"
      },
      size: {
        sm: "text-xs px-2 py-1 h-6 gap-1.5",
        md: "text-sm px-2.5 py-1.5 h-7 gap-2",
        lg: "text-base px-3 py-2 h-8 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var timerIconVariants = (0, import_class_variance_authority.cva)("transition-transform duration-[2000ms]", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-3.5 h-3.5",
      lg: "w-4 h-4"
    },
    loading: {
      true: "animate-spin",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    loading: false
  }
});
var timerDisplayVariants = (0, import_class_variance_authority.cva)("font-mono tabular-nums tracking-tight", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var TimerRoot = import_react.default.forwardRef(
  ({ variant, size, loading, className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(timerVariants({ variant, size }), className),
        "data-slot": "timer",
        role: "timer",
        "aria-live": "polite",
        "aria-atomic": "true",
        ...props,
        children
      }
    );
  }
);
TimerRoot.displayName = "TimerRoot";
var TimerIcon = import_react.default.forwardRef(
  ({ size, loading, icon: Icon = import_lucide_react.Clock, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(timerIconVariants({ size, loading }), className),
        "data-slot": "timer-icon",
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-full h-full" })
      }
    );
  }
);
TimerIcon.displayName = "TimerIcon";
var TimerDisplay = import_react.default.forwardRef(
  ({ size, time, label, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref,
        className: (0, import_utils.cn)(timerDisplayVariants({ size }), className),
        "data-slot": "timer-display",
        "aria-label": label || `Timer: ${time}`,
        ...props,
        children: time
      }
    );
  }
);
TimerDisplay.displayName = "TimerDisplay";
var Timer = import_react.default.forwardRef(
  ({
    loading = false,
    onTick,
    resetOnLoadingChange = true,
    format = "SS.MS",
    variant,
    size,
    className,
    ...props
  }, ref) => {
    const { formattedTime } = useTimer({
      loading,
      onTick,
      resetOnLoadingChange,
      format
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      TimerRoot,
      {
        ref,
        variant,
        size,
        loading,
        className,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerIcon, { size, loading }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerDisplay, { size, time: formattedTime.display })
        ]
      }
    );
  }
);
Timer.displayName = "Timer";
function useTimer({
  loading = false,
  onTick,
  resetOnLoadingChange = true,
  format = "SS.MS"
} = {}) {
  const [elapsedTime, setElapsedTime] = (0, import_react.useState)(0);
  const [milliseconds, setMilliseconds] = (0, import_react.useState)(0);
  const [isRunning, setIsRunning] = (0, import_react.useState)(false);
  const startTimeRef = (0, import_react.useRef)(0);
  const rafRef = (0, import_react.useRef)(null);
  const reset = (0, import_react.useCallback)(() => {
    setElapsedTime(0);
    setMilliseconds(0);
    startTimeRef.current = 0;
  }, []);
  const start = (0, import_react.useCallback)(() => {
    setIsRunning(true);
    startTimeRef.current = performance.now();
  }, []);
  const stop = (0, import_react.useCallback)(() => {
    setIsRunning(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (!isRunning) return;
    const updateTimer = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const newElapsedTime = Math.floor(elapsed / 1e3);
      const newMilliseconds = Math.floor(elapsed % 1e3);
      setElapsedTime(newElapsedTime);
      setMilliseconds(newMilliseconds);
      rafRef.current = requestAnimationFrame(updateTimer);
    };
    rafRef.current = requestAnimationFrame(updateTimer);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isRunning]);
  (0, import_react.useEffect)(() => {
    if (loading) {
      if (resetOnLoadingChange) {
        reset();
      }
      start();
    } else {
      stop();
    }
  }, [loading, resetOnLoadingChange, reset, start, stop]);
  (0, import_react.useEffect)(() => {
    if (onTick) {
      onTick(elapsedTime, milliseconds);
    }
  }, [elapsedTime, milliseconds, onTick]);
  const formatTime = (0, import_react.useCallback)(
    (totalSeconds, ms) => {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      switch (format) {
        case "HH:MM:SS":
          return {
            seconds: seconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          };
        case "MM:SS":
          const totalMinutes = Math.floor(totalSeconds / 60);
          const remainingSeconds = totalSeconds % 60;
          return {
            seconds: remainingSeconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${totalMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
          };
        case "SS.MS":
        default:
          return {
            seconds: totalSeconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${totalSeconds.toString().padStart(2, "0")}.${Math.floor(
              ms / 10
            ).toString().padStart(2, "0")}`
          };
      }
    },
    [format]
  );
  const formattedTime = formatTime(elapsedTime, milliseconds);
  return {
    elapsedTime,
    milliseconds,
    formattedTime,
    isRunning,
    reset,
    start,
    stop
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timer,
  TimerDisplay,
  TimerIcon,
  TimerRoot,
  useTimer
});
//# sourceMappingURL=timer.cjs.map