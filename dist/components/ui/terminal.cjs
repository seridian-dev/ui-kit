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

// src/components/ui/terminal.tsx
var terminal_exports = {};
__export(terminal_exports, {
  Terminal: () => Terminal
});
module.exports = __toCommonJS(terminal_exports);
var import_react = require("react");
var import_react2 = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
function Terminal({
  lines,
  title = "bash",
  speed = 18,
  className
}) {
  const ref = (0, import_react.useRef)(null);
  const inView = (0, import_react2.useInView)(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = (0, import_react2.useReducedMotion)();
  const [progress, setProgress] = (0, import_react.useState)({ line: 0, char: 0 });
  const done = reducedMotion || progress.line >= lines.length - 1 && progress.char >= (lines[lines.length - 1]?.length ?? 0);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      "data-slot": "terminal",
      className: (0, import_utils.cn)(
        "w-full overflow-hidden rounded-xl border bg-neutral-950 font-mono text-sm shadow-xl",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            "data-slot": "terminal-titlebar",
            className: "flex items-center gap-3 border-b border-white/10 px-4 py-2.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-red-500/80" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-yellow-500/80" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-green-500/80" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-neutral-500", children: title })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "data-slot": "terminal-body",
            className: "min-h-32 space-y-1.5 p-4 text-neutral-300",
            children: visibleLines.map((line, i) => {
              const isCommand = lines[i]?.startsWith("$ ");
              const isLast = i === visibleLines.length - 1;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { "data-slot": "terminal-line", className: "leading-relaxed", children: [
                isCommand ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-emerald-400", children: "$ " }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-neutral-100", children: line.slice(2) })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-neutral-400", children: line }),
                isLast && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-pulse text-neutral-100", children: "\u258D" })
              ] }, i);
            })
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Terminal
});
//# sourceMappingURL=terminal.cjs.map