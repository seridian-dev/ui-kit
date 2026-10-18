import * as React from 'react';
import { Transition } from 'motion/react';

declare function BorderBeam({ className, size, delay, duration, colorFrom, colorTo, transition, style, reverse, initialOffset, borderWidth, }: {
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    transition?: Transition;
    className?: string;
    style?: React.CSSProperties;
    reverse?: boolean;
    initialOffset?: number;
    borderWidth?: number;
}): React.JSX.Element;

export { BorderBeam };
