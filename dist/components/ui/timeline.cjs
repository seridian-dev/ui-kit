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

// src/components/ui/timeline.tsx
var timeline_exports = {};
__export(timeline_exports, {
  Timeline: () => Timeline,
  TimelineContent: () => TimelineContent,
  TimelineDate: () => TimelineDate,
  TimelineHeader: () => TimelineHeader,
  TimelineIndicator: () => TimelineIndicator,
  TimelineItem: () => TimelineItem,
  TimelineSeparator: () => TimelineSeparator,
  TimelineTitle: () => TimelineTitle
});
module.exports = __toCommonJS(timeline_exports);
var React = __toESM(require("react"), 1);
var import_radix_ui = require("radix-ui");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var TimelineContext = React.createContext(
  void 0
);
var useTimeline = () => {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a Timeline");
  }
  return context;
};
function Timeline({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "vertical",
  className,
  ...props
}) {
  const [activeStep, setInternalStep] = React.useState(defaultValue);
  const setActiveStep = React.useCallback(
    (step) => {
      if (value === void 0) {
        setInternalStep(step);
      }
      onValueChange?.(step);
    },
    [value, onValueChange]
  );
  const currentStep = value ?? activeStep;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    TimelineContext.Provider,
    {
      value: { activeStep: currentStep, setActiveStep },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          "data-slot": "timeline",
          className: (0, import_utils.cn)(
            "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
            className
          ),
          "data-orientation": orientation,
          ...props
        }
      )
    }
  );
}
function TimelineContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "timeline-content",
      className: (0, import_utils.cn)("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TimelineDate({
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? import_radix_ui.Slot.Root : "time";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    {
      "data-slot": "timeline-date",
      className: (0, import_utils.cn)(
        "text-muted-foreground mb-1 block text-xs font-medium group-data-[orientation=vertical]/timeline:max-sm:h-4",
        className
      ),
      ...props
    }
  );
}
function TimelineHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-slot": "timeline-header", className: (0, import_utils.cn)(className), ...props });
}
function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "timeline-indicator",
      className: (0, import_utils.cn)(
        "border-primary/20 group-data-completed/timeline-item:border-primary absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2",
        className
      ),
      "aria-hidden": "true",
      ...props,
      children
    }
  );
}
function TimelineItem({ step, className, ...props }) {
  const { activeStep } = useTimeline();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "timeline-item",
      className: (0, import_utils.cn)(
        "group/timeline-item has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-primary relative flex flex-1 flex-col gap-0.5 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-12",
        className
      ),
      "data-completed": step <= activeStep || void 0,
      ...props
    }
  );
}
function TimelineSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "timeline-separator",
      className: (0, import_utils.cn)(
        "bg-primary/10 absolute self-start group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:translate-y-4.5",
        className
      ),
      "aria-hidden": "true",
      ...props
    }
  );
}
function TimelineTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "h3",
    {
      "data-slot": "timeline-title",
      className: (0, import_utils.cn)("text-sm font-medium", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
});
//# sourceMappingURL=timeline.cjs.map