import * as React from 'react';

declare function Marquee({ className, reverse, pauseOnHover, children, vertical, repeat, ...props }: React.ComponentProps<"div"> & {
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
}): React.JSX.Element;

export { Marquee };
