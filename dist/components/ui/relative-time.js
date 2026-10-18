"use client";

// src/components/ui/relative-time.tsx
import * as React from "react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "../../lib/utils.js";
import { jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
    "time",
    {
      "data-slot": "relative-time",
      dateTime: isValid ? dateObject.toISOString() : void 0,
      title: isValid ? dateObject.toLocaleString() : void 0,
      className: cn("whitespace-nowrap text-sm text-muted-foreground", className),
      ...props,
      children: [
        prefix,
        isValid ? formatDistanceToNow(dateObject, { addSuffix: true }) : null,
        suffix
      ]
    }
  );
}
export {
  RelativeTime
};
//# sourceMappingURL=relative-time.js.map