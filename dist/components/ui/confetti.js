"use client";

// src/components/ui/confetti.tsx
import {
  createContext,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from "react";
import confetti from "canvas-confetti";
import { Button } from "./button.js";
import { jsx, jsxs } from "react/jsx-runtime";
var ConfettiContext = createContext({});
function Confetti({
  ref,
  options,
  globalOptions = { resize: true, useWorker: true },
  manualstart = false,
  children,
  ...props
}) {
  const instanceRef = useRef(null);
  const canvasRef = useCallback(
    (node) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions]
  );
  const fire = useCallback(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [options]
  );
  const api = useMemo(() => ({ fire }), [fire]);
  useImperativeHandle(ref, () => api, [api]);
  useEffect(() => {
    if (!manualstart) {
      ;
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error("Confetti effect error:", error);
        }
      })();
    }
  }, [manualstart, fire]);
  return /* @__PURE__ */ jsxs(ConfettiContext.Provider, { value: api, children: [
    /* @__PURE__ */ jsx("canvas", { "data-slot": "confetti", ref: canvasRef, ...props }),
    children
  ] });
}
function ConfettiButton({
  options,
  children,
  ...props
}) {
  const handleClick = async (event) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        }
      });
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };
  return /* @__PURE__ */ jsx(Button, { "data-slot": "confetti-button", onClick: handleClick, ...props, children });
}
export {
  Confetti,
  ConfettiButton
};
//# sourceMappingURL=confetti.js.map