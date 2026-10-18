import * as React from 'react';

interface ContributionDataPoint {
    date: string;
    count: number;
}
interface ContributionGraphProps extends Omit<React.ComponentProps<"div">, "children"> {
    data: ContributionDataPoint[];
    max?: number;
    monthLabels?: boolean;
    weekdayLabels?: "none" | "left";
}
declare function ContributionGraph({ data, max: maxProp, monthLabels: showMonthLabels, weekdayLabels, className, ...props }: ContributionGraphProps): React.JSX.Element;

export { type ContributionDataPoint, ContributionGraph, type ContributionGraphProps };
