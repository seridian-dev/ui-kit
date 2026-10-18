import * as React from 'react';

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    orientation?: "horizontal" | "vertical";
}
declare function Timeline({ defaultValue, value, onValueChange, orientation, className, ...props }: TimelineProps): React.JSX.Element;
declare function TimelineContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
interface TimelineDateProps extends React.HTMLAttributes<HTMLTimeElement> {
    asChild?: boolean;
}
declare function TimelineDate({ asChild, className, ...props }: TimelineDateProps): React.JSX.Element;
declare function TimelineHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
declare function TimelineIndicator({ asChild, className, children, ...props }: TimelineIndicatorProps): React.JSX.Element;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    step: number;
}
declare function TimelineItem({ step, className, ...props }: TimelineItemProps): React.JSX.Element;
declare function TimelineSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare function TimelineTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): React.JSX.Element;

export { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle };
