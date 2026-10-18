import * as React from 'react';
import { MotionProps } from 'motion/react';

interface ScrollProgressProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
    ref?: React.Ref<HTMLDivElement>;
}
declare function ScrollProgress({ className, ref, ...props }: ScrollProgressProps): React.JSX.Element;

export { ScrollProgress };
