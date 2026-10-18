import * as React from 'react';

interface MeteorsProps {
    number?: number;
    minDelay?: number;
    maxDelay?: number;
    minDuration?: number;
    maxDuration?: number;
    angle?: number;
    className?: string;
}
declare const Meteors: ({ number, minDelay, maxDelay, minDuration, maxDuration, angle, className, }: MeteorsProps) => React.JSX.Element;

export { Meteors };
