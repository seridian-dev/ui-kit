import * as React$1 from 'react';

type RatingItem = {
    value: string;
    label: string;
    icon: React.ReactNode;
};
type RatingInputProps = React.ComponentProps<"fieldset"> & {
    items?: RatingItem[];
    legend?: React.ReactNode;
    defaultValue?: string;
};
declare function RatingInput({ items, legend, defaultValue, className, ...props }: RatingInputProps): React$1.JSX.Element;

export { RatingInput, type RatingInputProps, type RatingItem };
