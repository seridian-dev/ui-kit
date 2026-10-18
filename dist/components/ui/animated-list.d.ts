import React__default, { ComponentPropsWithoutRef } from 'react';

declare function AnimatedListItem({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
    children: React__default.ReactNode;
    delay?: number;
}
declare const AnimatedList: React__default.MemoExoticComponent<({ children, className, delay, ...props }: AnimatedListProps) => React__default.JSX.Element>;

export { AnimatedList, AnimatedListItem, type AnimatedListProps };
