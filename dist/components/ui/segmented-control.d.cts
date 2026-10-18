import * as React from 'react';

declare function SegmentedControl({ className, value, onChange, label, fill, children, ...props }: Omit<React.ComponentProps<"div">, "onChange"> & {
    value: string;
    onChange: (value: string) => void;
    label: string;
    fill?: boolean;
}): React.JSX.Element;
declare function SegmentedControlItem({ className, value: itemValue, disabled, children, ...props }: React.ComponentProps<"button"> & {
    value: string;
}): React.JSX.Element;

export { SegmentedControl, SegmentedControlItem };
