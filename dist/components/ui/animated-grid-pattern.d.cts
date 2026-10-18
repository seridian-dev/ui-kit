import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';

interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: number;
    numSquares?: number;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}
declare function AnimatedGridPattern({ width, height, x, y, strokeDasharray, numSquares, className, maxOpacity, duration, repeatDelay, ...props }: AnimatedGridPatternProps): React.JSX.Element;

export { AnimatedGridPattern, type AnimatedGridPatternProps };
