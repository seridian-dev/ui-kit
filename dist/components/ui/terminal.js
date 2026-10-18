"use client";

// src/components/ui/terminal.tsx
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "../../lib/utils.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Terminal({
  lines,
  title = "bash",
  speed = 18,
  className
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState({ line: 0, char: 0 });
  const done = reducedMotion || progress.line >= lines.length - 1 && progress.char >= (lines[lines.length - 1]?.length ?? 0);
  useEffect(() => {
    if (!inView || reducedMotion || done) return;
    const current = lines[progress.line] ?? "";
    const timeout = setTimeout(
      () => setProgress(
        (p) => p.char < current.length ? { ...p, char: p.char + 1 } : { line: p.line + 1, char: 0 }
      ),
      progress.char === 0 ? 260 : speed
    );
    return () => clearTimeout(timeout);
  }, [inView, reducedMotion, done, progress, lines, speed]);
  const visibleLines = reducedMotion ? lines : lines.slice(0, progress.line + 1).map((l, i) => i === progress.line ? l.slice(0, progress.char) : l);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-slot": "terminal",
      className: cn(
        "w-full overflow-hidden rounded-xl border bg-neutral-950 font-mono text-sm shadow-xl",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            "data-slot": "terminal-titlebar",
            className: "flex items-center gap-3 border-b border-white/10 px-4 py-2.5",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-red-500/80" }),
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-yellow-500/80" }),
                /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full bg-green-500/80" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: title })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "terminal-body",
            className: "min-h-32 space-y-1.5 p-4 text-neutral-300",
            children: visibleLines.map((line, i) => {
              const isCommand = lines[i]?.startsWith("$ ");
              const isLast = i === visibleLines.length - 1;
              return /* @__PURE__ */ jsxs("p", { "data-slot": "terminal-line", className: "leading-relaxed", children: [
                isCommand ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "$ " }),
                  /* @__PURE__ */ jsx("span", { className: "text-neutral-100", children: line.slice(2) })
                ] }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: line }),
                isLast && !done && /* @__PURE__ */ jsx("span", { className: "animate-pulse text-neutral-100", children: "\u258D" })
              ] }, i);
            })
          }
        )
      ]
    }
  );
}
export {
  Terminal
};
//# sourceMappingURL=terminal.js.map