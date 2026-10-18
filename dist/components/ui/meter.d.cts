import * as React from 'react';

declare function Meter({ className, value, min, max, format, ...props }: React.ComponentProps<"div"> & {
    value: number;
    min?: number;
    max?: number;
    format?: (value: number) => string;
}): React.JSX.Element;
declare function MeterLabel({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function MeterValue({ className, children, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function MeterTrack({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function MeterIndicator({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

export { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue };
