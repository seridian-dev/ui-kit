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

// src/components/ui/onboarding.tsx
var onboarding_exports = {};
__export(onboarding_exports, {
  ChoiceGroup: () => ChoiceGroup,
  FeatureCarousel: () => FeatureCarousel,
  Onboarding: () => Onboarding,
  StepIndicator: () => StepIndicator,
  TipsList: () => TipsList,
  useOnboarding: () => useOnboarding
});
module.exports = __toCommonJS(onboarding_exports);
var import_react = require("react");
var import_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var stepIndicatorVariants = (0, import_class_variance_authority.cva)("flex items-center justify-center gap-2", {
  variants: {
    variant: {
      dots: "",
      pills: ""
    }
  },
  defaultVariants: {
    variant: "dots"
  }
});
var stepDotVariants = (0, import_class_variance_authority.cva)("rounded-full transition-all duration-200", {
  variants: {
    variant: {
      dots: "size-2 data-[state=active]:size-2.5 data-[state=active]:bg-foreground data-[state=completed]:bg-foreground/60 data-[state=inactive]:bg-muted-foreground/30",
      pills: "h-1 max-w-8 flex-1 rounded-full data-[state=active]:bg-foreground data-[state=completed]:bg-foreground/60 data-[state=inactive]:bg-muted-foreground/30"
    }
  },
  defaultVariants: {
    variant: "dots"
  }
});
function StepIndicator({
  currentStep,
  totalSteps,
  variant = "dots",
  className,
  dotClassName,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "aria-label": `Step ${currentStep} of ${totalSteps}`,
      "aria-valuemax": totalSteps,
      "aria-valuemin": 1,
      "aria-valuenow": currentStep,
      className: (0, import_utils.cn)(stepIndicatorVariants({ variant }), className),
      "data-slot": "onboarding-step-indicator",
      role: "progressbar",
      ...props,
      children: Array.from({ length: totalSteps }, (_, i) => {
        const stepNumber = i + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;
        let stepState = "inactive";
        if (isActive) {
          stepState = "active";
        } else if (isCompleted) {
          stepState = "completed";
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "aria-current": isActive ? "step" : void 0,
            className: (0, import_utils.cn)(stepDotVariants({ variant }), dotClassName),
            "data-slot": "onboarding-step-dot",
            "data-state": stepState
          },
          stepNumber
        );
      })
    }
  );
}
var OnboardingContext = (0, import_react.createContext)(null);
function useOnboarding() {
  const ctx = (0, import_react.useContext)(OnboardingContext);
  if (!ctx) {
    throw new Error("Onboarding components must be used within Onboarding.Root");
  }
  return ctx;
}
function OnboardingRoot({
  value: controlledValue,
  defaultValue = 1,
  onValueChange,
  stepValue: controlledStepValue,
  defaultStepValue = 0,
  onStepValueChange,
  totalSteps,
  maxStepValue: controlledMaxStepValue = 0,
  onComplete,
  canGoNext: canGoNextFn,
  children,
  className,
  ...props
}) {
  const [currentStep, setCurrentStep] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const [stepValue, setStepValueState] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledStepValue,
    defaultProp: defaultStepValue,
    onChange: onStepValueChange
  });
  const maxStepValue = controlledMaxStepValue ?? 0;
  const canGoNext = canGoNextFn ? canGoNextFn(currentStep, stepValue) : true;
  const canGoBack = currentStep > 1 || stepValue > 0;
  const handleNext = (0, import_react.useCallback)(() => {
    if (currentStep === 1 && stepValue < maxStepValue) {
      setStepValueState((prev) => prev + 1);
    } else if (currentStep < totalSteps) {
      setStepValueState(0);
      setCurrentStep((prev) => prev + 1);
    }
  }, [
    currentStep,
    stepValue,
    maxStepValue,
    totalSteps,
    setStepValueState,
    setCurrentStep
  ]);
  const handleBack = (0, import_react.useCallback)(() => {
    if (currentStep === 1 && stepValue > 0) {
      setStepValueState((prev) => prev - 1);
    } else if (currentStep === 2) {
      setCurrentStep(1);
      setStepValueState(maxStepValue);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, stepValue, maxStepValue, setStepValueState, setCurrentStep]);
  const handleComplete = (0, import_react.useCallback)(() => {
    onComplete?.();
  }, [onComplete]);
  const contextValue = (0, import_react.useMemo)(
    () => ({
      currentStep,
      totalSteps,
      stepValue,
      setStep: setCurrentStep,
      setStepValue: setStepValueState,
      maxStepValue,
      canGoNext,
      canGoBack,
      handleBack,
      handleNext,
      handleComplete,
      onComplete
    }),
    [
      currentStep,
      totalSteps,
      stepValue,
      setCurrentStep,
      setStepValueState,
      maxStepValue,
      canGoNext,
      canGoBack,
      handleBack,
      handleNext,
      handleComplete,
      onComplete
    ]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardingContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex flex-col rounded-xl border bg-background p-6 shadow-sm",
        className
      ),
      "data-slot": "onboarding",
      "data-state": `step-${currentStep}`,
      ...props,
      children
    }
  ) });
}
function OnboardingStep({
  step,
  children,
  className,
  ...props
}) {
  const { currentStep } = useOnboarding();
  const isActive = currentStep === step;
  if (!isActive) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(className),
      "data-slot": "onboarding-step",
      "data-state": "active",
      ...props,
      children
    }
  );
}
function OnboardingStepIndicator(props) {
  const { currentStep, totalSteps } = useOnboarding();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    StepIndicator,
    {
      currentStep,
      totalSteps,
      ...props
    }
  );
}
function OnboardingHeader({
  title,
  description,
  children,
  className,
  ...props
}) {
  if (children) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: (0, import_utils.cn)("text-center", className),
        "data-slot": "onboarding-header",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_utils.cn)(
        "flex flex-col gap-1 text-center",
        "[&_[data-slot=onboarding-title]]:font-normal [&_[data-slot=onboarding-title]]:font-serif [&_[data-slot=onboarding-title]]:text-3xl [&_[data-slot=onboarding-title]]:text-foreground",
        "[&_[data-slot=onboarding-description]]:text-base [&_[data-slot=onboarding-description]]:text-muted-foreground",
        className
      ),
      "data-slot": "onboarding-header",
      ...props,
      children: [
        title != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { "data-slot": "onboarding-title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { "data-slot": "onboarding-description", children: description })
      ]
    }
  );
}
function OnboardingNavigation({
  backLabel = "Back",
  nextLabel = "Next",
  completeLabel = "Start Creating",
  canGoNext: canGoNextOverride,
  children,
  className,
  ...props
}) {
  const {
    currentStep,
    totalSteps,
    canGoNext: contextCanGoNext,
    canGoBack,
    handleBack,
    handleNext,
    handleComplete
  } = useOnboarding();
  const canGoNext = canGoNextOverride ?? contextCanGoNext;
  const isLastStep = currentStep === totalSteps;
  if (children) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "fieldset",
      {
        className: (0, import_utils.cn)("flex gap-3", className),
        "data-slot": "onboarding-navigation",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "fieldset",
    {
      "aria-label": "Onboarding navigation",
      className: (0, import_utils.cn)("flex gap-3", className),
      "data-slot": "onboarding-navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            "aria-label": backLabel,
            className: "flex-1 rounded-xl py-5",
            "data-slot": "onboarding-back",
            disabled: !canGoBack,
            onClick: handleBack,
            variant: "outline",
            children: backLabel
          }
        ),
        isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            "aria-label": completeLabel,
            className: "flex-1 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90",
            "data-slot": "onboarding-complete",
            onClick: handleComplete,
            children: completeLabel
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_button.Button,
          {
            "aria-label": nextLabel,
            className: "flex-1 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90",
            "data-slot": "onboarding-next",
            disabled: !canGoNext,
            onClick: handleNext,
            children: nextLabel
          }
        )
      ]
    }
  );
}
var ChoiceGroupContext = (0, import_react.createContext)(null);
function useChoiceGroup() {
  const ctx = (0, import_react.useContext)(ChoiceGroupContext);
  if (!ctx) {
    throw new Error("ChoiceGroup.Item must be used within ChoiceGroup");
  }
  return ctx;
}
function ChoiceGroupRoot({
  value: controlledValue,
  defaultValue = null,
  onValueChange,
  name,
  orientation = "grid",
  children,
  className,
  ...props
}) {
  const [value, setValueState] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue ?? void 0,
    defaultProp: defaultValue ?? null,
    onChange: (v) => v !== null && onValueChange?.(v)
  });
  const setValue = (0, import_react.useCallback)(
    (v) => {
      setValueState(v);
    },
    [setValueState]
  );
  const contextValue = (0, import_react.useMemo)(
    () => ({
      value,
      setValue,
      name,
      orientation
    }),
    [value, setValue, name, orientation]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "aria-label": name,
      className: (0, import_utils.cn)(className),
      "data-orientation": orientation,
      "data-slot": "choice-group",
      role: "radiogroup",
      ...props,
      children
    }
  ) });
}
function ChoiceGroupItemComponent({
  value: itemValue,
  children,
  className,
  ...props
}) {
  const { value, setValue, name } = useChoiceGroup();
  const isSelected = value === itemValue;
  const handleChange = (0, import_react.useCallback)(
    (e) => {
      if (e.currentTarget.checked) {
        setValue(itemValue);
      }
    },
    [itemValue, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "label",
    {
      className: (0, import_utils.cn)(className),
      "data-slot": "choice-group-item",
      "data-state": isSelected ? "selected" : "unselected",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            checked: isSelected,
            className: "sr-only",
            name,
            onChange: handleChange,
            type: "radio",
            value: itemValue
          }
        ),
        children
      ]
    }
  );
}
ChoiceGroupItemComponent.displayName = "ChoiceGroupItem";
var ChoiceGroup = Object.assign(ChoiceGroupRoot, {
  Item: ChoiceGroupItemComponent
});
var FeatureCarouselContext = (0, import_react.createContext)(null);
function useFeatureCarousel() {
  const ctx = (0, import_react.useContext)(FeatureCarouselContext);
  if (!ctx) {
    throw new Error("FeatureCarousel.Item must be used within FeatureCarousel");
  }
  return ctx;
}
function FeatureCarouselRoot({
  value: controlledValue,
  defaultValue = 0,
  onValueChange,
  totalItems: totalItemsProp,
  children,
  className,
  ...props
}) {
  const [value, setValue] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const totalItems = totalItemsProp ?? import_react.Children.count(children);
  const isActive = (0, import_react.useCallback)((index) => value === index, [value]);
  const contextValue = (0, import_react.useMemo)(
    () => ({
      value,
      setValue,
      totalItems,
      isActive
    }),
    [value, setValue, totalItems, isActive]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "aria-label": "Features",
      className: (0, import_utils.cn)(className),
      "data-slot": "feature-carousel",
      role: "tablist",
      ...props,
      children
    }
  ) });
}
function FeatureCarouselItemComponent({
  index,
  children,
  className,
  onClick,
  ...props
}) {
  const { setValue, isActive, totalItems } = useFeatureCarousel();
  const active = isActive(index);
  const handleClick = (0, import_react.useCallback)(
    (e) => {
      setValue(index);
      onClick?.(e);
    },
    [index, setValue, onClick]
  );
  const handleKeyDown = (0, import_react.useCallback)(
    (e) => {
      if (totalItems <= 1) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setValue((prev) => Math.min(prev + 1, totalItems - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setValue((prev) => Math.max(prev - 1, 0));
      }
    },
    [totalItems, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      "aria-selected": active,
      className: (0, import_utils.cn)(className),
      "data-slot": "feature-carousel-item",
      "data-state": active ? "active" : "inactive",
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: "tab",
      tabIndex: active ? 0 : -1,
      type: "button",
      ...props,
      children
    }
  );
}
FeatureCarouselItemComponent.displayName = "FeatureCarouselItem";
var FeatureCarousel = Object.assign(FeatureCarouselRoot, {
  Item: FeatureCarouselItemComponent
});
function TipsListRoot({ title, children, className, ...props }) {
  const titleId = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)(className), "data-slot": "tips-list", ...props, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "sr-only", "data-slot": "tips-list-title", id: titleId, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "ol",
      {
        "aria-label": title ? void 0 : "Tips",
        "aria-labelledby": title ? titleId : void 0,
        "data-slot": "tips-list-items",
        children
      }
    )
  ] });
}
function TipsListItemComponent({
  number,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "li",
    {
      className: (0, import_utils.cn)(className),
      "data-number": number,
      "data-slot": "tips-list-item",
      ...props,
      children: [
        number != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": true, "data-slot": "tips-list-item-number", children: number }),
        children
      ]
    }
  );
}
var TipsList = Object.assign(TipsListRoot, {
  Item: TipsListItemComponent
});
var Onboarding = Object.assign(OnboardingRoot, {
  Step: OnboardingStep,
  StepIndicator: OnboardingStepIndicator,
  Header: OnboardingHeader,
  Navigation: OnboardingNavigation
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChoiceGroup,
  FeatureCarousel,
  Onboarding,
  StepIndicator,
  TipsList,
  useOnboarding
});
//# sourceMappingURL=onboarding.cjs.map