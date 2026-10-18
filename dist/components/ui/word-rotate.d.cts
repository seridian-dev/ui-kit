import * as React from 'react';
import { MotionProps } from 'motion/react';

interface WordRotateProps {
    words: string[];
    duration?: number;
    motionProps?: MotionProps;
    className?: string;
}
declare function WordRotate({ words, duration, motionProps, className, }: WordRotateProps): React.JSX.Element;

export { WordRotate };
