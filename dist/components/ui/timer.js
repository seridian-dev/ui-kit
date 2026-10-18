"use client";

// src/components/ui/timer.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
var timerVariants = cva(
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
var timerIconVariants = cva("transition-transform duration-[2000ms]", {
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
var timerDisplayVariants = cva("font-mono tabular-nums tracking-tight", {
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
var TimerRoot = React.forwardRef(
  ({ variant, size, loading, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(timerVariants({ variant, size }), className),
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
var TimerIcon = React.forwardRef(
  ({ size, loading, icon: Icon = Clock, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(timerIconVariants({ size, loading }), className),
        "data-slot": "timer-icon",
        ...props,
        children: /* @__PURE__ */ jsx(Icon, { className: "w-full h-full" })
      }
    );
  }
);
TimerIcon.displayName = "TimerIcon";
var TimerDisplay = React.forwardRef(
  ({ size, time, label, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(timerDisplayVariants({ size }), className),
        "data-slot": "timer-display",
        "aria-label": label || `Timer: ${time}`,
        ...props,
        children: time
      }
    );
  }
);
TimerDisplay.displayName = "TimerDisplay";
var Timer = React.forwardRef(
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
    return /* @__PURE__ */ jsxs(
      TimerRoot,
      {
        ref,
        variant,
        size,
        loading,
        className,
        ...props,
        children: [
          /* @__PURE__ */ jsx(TimerIcon, { size, loading }),
          /* @__PURE__ */ jsx(TimerDisplay, { size, time: formattedTime.display })
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
  const [elapsedTime, setElapsedTime] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0);
  const rafRef = useRef(null);
  const reset = useCallback(() => {
    setElapsedTime(0);
    setMilliseconds(0);
    startTimeRef.current = 0;
  }, []);
  const start = useCallback(() => {
    setIsRunning(true);
    startTimeRef.current = performance.now();
  }, []);
  const stop = useCallback(() => {
    setIsRunning(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);
  useEffect(() => {
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
  useEffect(() => {
    if (loading) {
      if (resetOnLoadingChange) {
        reset();
      }
      start();
    } else {
      stop();
    }
  }, [loading, resetOnLoadingChange, reset, start, stop]);
  useEffect(() => {
    if (onTick) {
      onTick(elapsedTime, milliseconds);
    }
  }, [elapsedTime, milliseconds, onTick]);
  const formatTime = useCallback(
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
export {
  Timer,
  TimerDisplay,
  TimerIcon,
  TimerRoot,
  useTimer
};
//# sourceMappingURL=timer.js.map