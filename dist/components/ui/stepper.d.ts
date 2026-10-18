import * as React from 'react';

interface StepperProps {
    steps: string[];
    /** Zero-based index of the step in progress */
    current: number;
    /** Make completed steps clickable */
    onStepClick?: (index: number) => void;
    className?: string;
}
/**
 * Horizontal progress indicator for multi-step forms and checkouts.
 * The connecting bar fills as steps complete.
 */
declare function Stepper({ steps, current, onStepClick, className }: StepperProps): React.JSX.Element;

export { Stepper, type StepperProps };
