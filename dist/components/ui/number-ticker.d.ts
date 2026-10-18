import * as React from 'react';

declare function NumberTicker({ value, startValue, direction, delay, className, decimalPlaces, ...props }: React.ComponentProps<"span"> & {
    value: number;
    startValue?: number;
    direction?: "up" | "down";
    delay?: number;
    decimalPlaces?: number;
}): React.JSX.Element;

export { NumberTicker };
