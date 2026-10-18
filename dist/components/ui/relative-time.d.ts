import * as React from 'react';

declare function RelativeTime({ date, interval, prefix, suffix, className, ...props }: React.ComponentProps<"time"> & {
    date: Date | string | number;
    interval?: number;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}): React.JSX.Element;

export { RelativeTime };
