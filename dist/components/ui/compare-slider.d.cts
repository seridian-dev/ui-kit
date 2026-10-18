import * as React from 'react';

interface CompareSliderProps {
    before: React.ReactNode;
    after: React.ReactNode;
    /** Starting divider position, 0–100 */
    initial?: number;
    /** Announced by the slider handle */
    label?: string;
    className?: string;
}
/**
 * Before/after wipe with a draggable divider. The handle is a real range
 * input, so it works with arrow keys and screen readers for free.
 */
declare function CompareSlider({ before, after, initial, label, className, }: CompareSliderProps): React.JSX.Element;

export { CompareSlider, type CompareSliderProps };
