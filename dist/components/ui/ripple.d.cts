import * as React from 'react';
import { ComponentPropsWithoutRef } from 'react';

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}
declare const Ripple: React.MemoExoticComponent<({ mainCircleSize, mainCircleOpacity, numCircles, className, ...props }: RippleProps) => React.JSX.Element>;

export { Ripple };
