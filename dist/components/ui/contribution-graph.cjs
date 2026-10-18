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

// src/components/ui/contribution-graph.tsx
var contribution_graph_exports = {};
__export(contribution_graph_exports, {
  ContributionGraph: () => ContributionGraph
});
module.exports = __toCommonJS(contribution_graph_exports);
var React = __toESM(require("react"), 1);
var import_date_fns = require("date-fns");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var LEVEL_ALPHAS = [0, 25, 50, 75, 100];
var WEEKDAY_LABELS = [
  null,
  "Mon",
  null,
  "Wed",
  null,
  "Fri",
  null
];
function toLevel(count, max) {
  if (max <= 0 || count <= 0) return 0;
  return Math.min(4, Math.max(1, Math.ceil(count / max * 4)));
}
function ContributionGraph({
  data,
  max: maxProp,
  monthLabels: showMonthLabels = true,
  weekdayLabels = "left",
  className,
  ...props
}) {
  const countByDate = React.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const point of data) map.set(point.date, point.count);
    return map;
  }, [data]);
  const { firstWeek, weeks, resolvedMax } = React.useMemo(() => {
    const dates = data.map((point) => (0, import_date_fns.parseISO)(point.date)).filter((date) => !Number.isNaN(date.getTime()));
    const earliest = dates.length > 0 ? (0, import_date_fns.min)(dates) : /* @__PURE__ */ new Date();
    const latest = dates.length > 0 ? (0, import_date_fns.max)(dates) : /* @__PURE__ */ new Date();
    const start = (0, import_date_fns.startOfWeek)(earliest);
    const derivedMax = data.reduce(
      (acc, point) => Math.max(acc, point.count),
      0
    );
    return {
      firstWeek: start,
      weeks: Math.max(
        1,
        dates.length > 0 ? (0, import_date_fns.differenceInCalendarWeeks)((0, import_date_fns.startOfWeek)(latest), start) + 1 : 1
      ),
      resolvedMax: maxProp ?? Math.max(1, derivedMax)
    };
  }, [data, maxProp]);
  const cells = [];
  for (let i = 0; i < weeks * 7; i++) {
    const date = (0, import_date_fns.addDays)(firstWeek, i);
    const key = (0, import_date_fns.format)(date, "yyyy-MM-dd");
    const count = countByDate.get(key) ?? 0;
    const level = toLevel(count, resolvedMax);
    const alpha = LEVEL_ALPHAS[level] ?? 0;
    cells.push(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          "data-slot": "contribution-graph-cell",
          "data-level": level,
          title: `${count} ${count === 1 ? "contribution" : "contributions"} on ${(0, import_date_fns.format)(date, "MMM d, yyyy")}`,
          className: "size-3 rounded-sm",
          style: {
            backgroundColor: `color-mix(in oklab, var(--color-primary) ${alpha}%, var(--color-muted))`,
            gridColumn: Math.floor(i / 7) + 1,
            gridRow: i % 7 + 2
          }
        },
        key
      )
    );
  }
  const monthSpans = [];
  if (showMonthLabels) {
    let previousMonth = -1;
    for (let w = 0; w < weeks; w++) {
      const weekStart = (0, import_date_fns.addDays)(firstWeek, w * 7);
      const currentMonth = (0, import_date_fns.getMonth)(weekStart);
      if (currentMonth !== previousMonth) {
        monthSpans.push({ column: w, label: (0, import_date_fns.format)(weekStart, "MMM") });
        previousMonth = currentMonth;
      }
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "contribution-graph",
      className: (0, import_utils.cn)("flex w-full text-[0.6rem]", className),
      ...props,
      children: [
        weekdayLabels === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "aria-hidden": "true",
            "data-slot": "contribution-graph-weekdays",
            className: "mr-1.5 flex shrink-0 flex-col gap-[3px]",
            style: showMonthLabels ? { paddingTop: "calc(1rem + 3px)" } : void 0,
            children: WEEKDAY_LABELS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                className: "flex h-3 items-center text-muted-foreground",
                children: label
              },
              index
            ))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "contribution-graph-scroll", className: "overflow-x-auto pb-1", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            "data-slot": "contribution-graph-grid",
            className: "grid w-max gap-[3px]",
            style: {
              gridTemplateColumns: `repeat(${weeks}, 0.75rem)`,
              gridTemplateRows: showMonthLabels ? "1rem repeat(7, 0.75rem)" : "repeat(7, 0.75rem)"
            },
            children: [
              showMonthLabels && monthSpans.map(({ column, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  "data-slot": "contribution-graph-month",
                  className: "text-muted-foreground",
                  style: { gridColumn: column + 1, gridRow: 1 },
                  children: label
                },
                `${column}-${label}`
              )),
              cells
            ]
          }
        ) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContributionGraph
});
//# sourceMappingURL=contribution-graph.cjs.map