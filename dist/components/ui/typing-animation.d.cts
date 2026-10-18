import * as React from 'react';
import * as framer_motion from 'framer-motion';
import { MotionProps, DOMMotionComponents, HTMLMotionProps } from 'motion/react';

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
interface TypingAnimationProps extends Omit<MotionProps, "children"> {
    children?: string;
    words?: string[];
    className?: string;
    duration?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    delay?: number;
    pauseDelay?: number;
    loop?: boolean;
    as?: MotionElementType;
    startOnView?: boolean;
    showCursor?: boolean;
    blinkCursor?: boolean;
    cursorStyle?: "line" | "block" | "underscore";
}
declare function TypingAnimation({ children, words, className, duration, typeSpeed, deleteSpeed, delay, pauseDelay, loop, as: Component, startOnView, showCursor, blinkCursor, cursorStyle, ...props }: TypingAnimationProps): React.JSX.Element;

export { TypingAnimation };
