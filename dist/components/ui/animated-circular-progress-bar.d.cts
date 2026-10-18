import * as React from 'react';

interface AnimatedCircularProgressBarProps {
    max?: number;
    min?: number;
    value: number;
    gaugePrimaryColor: string;
    gaugeSecondaryColor: string;
    className?: string;
}
declare function AnimatedCircularProgressBar({ max, min, value, gaugePrimaryColor, gaugeSecondaryColor, className, }: AnimatedCircularProgressBarProps): React.JSX.Element;

export { AnimatedCircularProgressBar };
