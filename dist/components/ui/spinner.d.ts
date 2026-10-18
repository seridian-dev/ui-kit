import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const spinnerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Spinner({ className, size, ...props }: React.ComponentProps<"span"> & VariantProps<typeof spinnerVariants>): React.JSX.Element;

export { Spinner, spinnerVariants };
