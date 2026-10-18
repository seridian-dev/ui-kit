import * as React from 'react';

interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
}
declare function OrbitingCircles({ className, children, reverse, duration, radius, path, iconSize, speed, ...props }: OrbitingCirclesProps): React.JSX.Element;

export { OrbitingCircles, type OrbitingCirclesProps };
