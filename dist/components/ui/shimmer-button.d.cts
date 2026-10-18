import * as React from 'react';

declare function ShimmerButton({ shimmerColor, shimmerSize, shimmerDuration, borderRadius, background, className, children, ...props }: React.ComponentProps<"button"> & {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
}): React.JSX.Element;

export { ShimmerButton };
