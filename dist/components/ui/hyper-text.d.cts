import * as React from 'react';
import * as framer_motion from 'framer-motion';
import { MotionProps, DOMMotionComponents, HTMLMotionProps } from 'motion/react';

type CharacterSet = string[] | readonly string[];
declare const motionElements: {
    readonly article: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"article">>;
    readonly div: framer_motion.ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
    readonly h1: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h1">>;
    readonly h2: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h2">>;
    readonly h3: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h3">>;
    readonly h4: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h4">>;
    readonly h5: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h5">>;
    readonly h6: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h6">>;
    readonly li: framer_motion.ForwardRefComponent<HTMLLIElement, HTMLMotionProps<"li">>;
    readonly p: framer_motion.ForwardRefComponent<HTMLParagraphElement, HTMLMotionProps<"p">>;
    readonly section: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">>;
    readonly span: framer_motion.ForwardRefComponent<HTMLSpanElement, HTMLMotionProps<"span">>;
};
type MotionElementType = Extract<keyof DOMMotionComponents, keyof typeof motionElements>;
interface HyperTextProps extends Omit<MotionProps, "children"> {
    /** The text content to be animated */
    children: string;
    /** Optional className for styling */
    className?: string;
    /** Duration of the animation in milliseconds */
    duration?: number;
    /** Delay before animation starts in milliseconds */
    delay?: number;
    /** Component to render as - defaults to div */
    as?: MotionElementType;
    /** Whether to start animation when element comes into view */
    startOnView?: boolean;
    /** Whether to trigger animation on hover */
    animateOnHover?: boolean;
    /** Custom character set for scramble effect. Defaults to uppercase alphabet */
    characterSet?: CharacterSet;
}
declare function HyperText({ children, className, duration, delay, as: Component, startOnView, animateOnHover, characterSet, ...props }: HyperTextProps): React.JSX.Element;

export { HyperText };
