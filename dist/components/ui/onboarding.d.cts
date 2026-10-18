import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const stepIndicatorVariants: (props?: ({
    variant?: "dots" | "pills" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const stepDotVariants: (props?: ({
    variant?: "dots" | "pills" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StepIndicatorProps extends React.ComponentPropsWithoutRef<"div">, VariantProps<typeof stepIndicatorVariants>, VariantProps<typeof stepDotVariants> {
    /** Current step index (1-based) */
    currentStep: number;
    /** Total number of steps */
    totalSteps: number;
    /** Optional className for each step dot */
    dotClassName?: string;
}
/**
 * Headless step indicator primitive.
 * Renders a list of step dots with proper ARIA for progress indication.
 * No visual styling—consumer provides via className.
 */
declare function StepIndicator({ currentStep, totalSteps, variant, className, dotClassName, ...props }: StepIndicatorProps): React.JSX.Element;
interface OnboardingContextValue {
    /** Current step index (1-based) */
    currentStep: number;
    /** Total number of steps */
    totalSteps: number;
    /** Sub-step value (e.g. feature carousel index within step 1) */
    stepValue: number;
    /** Set current step */
    setStep: (step: number | ((prev: number) => number)) => void;
    /** Set step value (sub-step) */
    setStepValue: (value: number | ((prev: number) => number)) => void;
    /** Max step value for current step (e.g. feature count - 1) */
    maxStepValue: number;
    /** Whether user can proceed to next */
    canGoNext: boolean;
    /** Whether user can go back */
    canGoBack: boolean;
    /** Navigate to previous step */
    handleBack: () => void;
    /** Navigate to next step or advance sub-step */
    handleNext: () => void;
    /** Complete onboarding */
    handleComplete: () => void;
    /** Callback when onboarding is completed */
    onComplete?: () => void;
}
declare function useOnboarding(): OnboardingContextValue;
interface OnboardingRootProps extends PropsWithChildren, Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
    /** Controlled step index (1-based) */
    value?: number;
    /** Default step index (uncontrolled) */
    defaultValue?: number;
    /** Callback when step changes */
    onValueChange?: (step: number) => void;
    /** Controlled sub-step value */
    stepValue?: number;
    /** Default sub-step value (uncontrolled) */
    defaultStepValue?: number;
    /** Callback when sub-step value changes */
    onStepValueChange?: (value: number) => void;
    /** Total number of steps */
    totalSteps: number;
    /** Max sub-step value for step 1 (e.g. feature count - 1). Default 0 = no sub-steps */
    maxStepValue?: number;
    /** Callback when onboarding is completed */
    onComplete?: () => void;
    /** Custom logic for whether user can proceed. Receives (step, stepValue). Default: true */
    canGoNext?: (step: number, stepValue: number) => boolean;
}
declare function OnboardingRoot({ value: controlledValue, defaultValue, onValueChange, stepValue: controlledStepValue, defaultStepValue, onStepValueChange, totalSteps, maxStepValue: controlledMaxStepValue, onComplete, canGoNext: canGoNextFn, children, className, ...props }: OnboardingRootProps): React.JSX.Element;
interface OnboardingStepProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Step index (1-based) - content renders when currentStep matches */
    step: number;
}
declare function OnboardingStep({ step, children, className, ...props }: OnboardingStepProps): React.JSX.Element | null;
interface OnboardingStepIndicatorProps extends Omit<React.ComponentProps<typeof StepIndicator>, "currentStep" | "totalSteps"> {
}
declare function OnboardingStepIndicator(props: OnboardingStepIndicatorProps): React.JSX.Element;
interface OnboardingHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Step title (optional when using children) */
    title?: string;
    /** Step description */
    description?: string;
    /** Custom header content (overrides title/description) */
    children?: React.ReactNode;
}
declare function OnboardingHeader({ title, description, children, className, ...props }: OnboardingHeaderProps): React.JSX.Element;
interface OnboardingNavigationProps extends React.ComponentPropsWithoutRef<"fieldset"> {
    /** Back button label */
    backLabel?: string;
    /** Next button label */
    nextLabel?: string;
    /** Complete button label */
    completeLabel?: string;
    /** Override can go next (when not using Root's canGoNext) */
    canGoNext?: boolean;
    /** Custom navigation content (use with asChild for full control) */
    children?: React.ReactNode;
}
declare function OnboardingNavigation({ backLabel, nextLabel, completeLabel, canGoNext: canGoNextOverride, children, className, ...props }: OnboardingNavigationProps): React.JSX.Element;
type Orientation = "horizontal" | "vertical" | "grid";
interface ChoiceGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "defaultValue"> {
    /** Controlled selected value */
    value?: string | null;
    /** Default selected value (uncontrolled) */
    defaultValue?: string | null;
    /** Callback when selection changes */
    onValueChange?: (value: string) => void;
    /** Name for radio group semantics (required for accessibility) */
    name: string;
    /** Layout orientation */
    orientation?: Orientation;
}
declare function ChoiceGroupRoot({ value: controlledValue, defaultValue, onValueChange, name, orientation, children, className, ...props }: ChoiceGroupProps): React.JSX.Element;
interface ChoiceGroupItemProps extends React.ComponentPropsWithoutRef<"label"> {
    /** Value when this item is selected */
    value: string;
}
declare function ChoiceGroupItemComponent({ value: itemValue, children, className, ...props }: ChoiceGroupItemProps): React.JSX.Element;
declare namespace ChoiceGroupItemComponent {
    var displayName: string;
}
declare const ChoiceGroup: typeof ChoiceGroupRoot & {
    Item: typeof ChoiceGroupItemComponent;
};
interface FeatureCarouselProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Controlled active index */
    value?: number;
    /** Default active index (uncontrolled) */
    defaultValue?: number;
    /** Callback when active index changes */
    onValueChange?: (index: number) => void;
    /** Total number of items (derived from children if not provided) */
    totalItems?: number;
}
declare function FeatureCarouselRoot({ value: controlledValue, defaultValue, onValueChange, totalItems: totalItemsProp, children, className, ...props }: FeatureCarouselProps): React.JSX.Element;
interface FeatureCarouselItemProps extends React.ComponentPropsWithoutRef<"button"> {
    /** Index of this item (0-based) */
    index: number;
}
declare function FeatureCarouselItemComponent({ index, children, className, onClick, ...props }: FeatureCarouselItemProps): React.JSX.Element;
declare namespace FeatureCarouselItemComponent {
    var displayName: string;
}
declare const FeatureCarousel: typeof FeatureCarouselRoot & {
    Item: typeof FeatureCarouselItemComponent;
};
interface TipsListProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Optional title/label for the list */
    title?: string;
}
/**
 * Headless tips list primitive.
 * Renders an ordered list with optional title.
 * No visual styling—consumer provides via className.
 */
declare function TipsListRoot({ title, children, className, ...props }: TipsListProps): React.JSX.Element;
interface TipsListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    /** Optional number to display (for custom styling) */
    number?: number;
}
declare function TipsListItemComponent({ number, children, className, ...props }: TipsListItemProps): React.JSX.Element;
declare const TipsList: typeof TipsListRoot & {
    Item: typeof TipsListItemComponent;
};
declare const Onboarding: typeof OnboardingRoot & {
    Step: typeof OnboardingStep;
    StepIndicator: typeof OnboardingStepIndicator;
    Header: typeof OnboardingHeader;
    Navigation: typeof OnboardingNavigation;
};

export { ChoiceGroup, type ChoiceGroupItemProps, type ChoiceGroupProps, FeatureCarousel, type FeatureCarouselItemProps, type FeatureCarouselProps, Onboarding, type OnboardingContextValue, type OnboardingHeaderProps, type OnboardingNavigationProps, type OnboardingRootProps, type OnboardingStepIndicatorProps, type OnboardingStepProps, StepIndicator, type StepIndicatorProps, TipsList, type TipsListItemProps, type TipsListProps, useOnboarding };
