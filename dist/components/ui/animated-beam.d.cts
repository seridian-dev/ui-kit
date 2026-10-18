import * as React from 'react';
import { RefObject } from 'react';

declare function AnimatedBeam({ className, containerRef, fromRef, toRef, curvature, reverse, duration, delay, pathColor, pathWidth, pathOpacity, gradientStartColor, gradientStopColor, repeat, repeatDelay, startXOffset, startYOffset, endXOffset, endYOffset, }: {
    className?: string;
    containerRef: RefObject<HTMLElement | null>;
    fromRef: RefObject<HTMLElement | null>;
    toRef: RefObject<HTMLElement | null>;
    curvature?: number;
    reverse?: boolean;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
    delay?: number;
    duration?: number;
    repeat?: number;
    repeatDelay?: number;
    startXOffset?: number;
    startYOffset?: number;
    endXOffset?: number;
    endYOffset?: number;
}): React.JSX.Element;

export { AnimatedBeam };
