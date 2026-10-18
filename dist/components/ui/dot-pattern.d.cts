import * as React from 'react';

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
    glow?: boolean;
    [key: string]: unknown;
}
declare function DotPattern({ width, height, x, y, cx, cy, cr, className, glow, ...props }: DotPatternProps): React.JSX.Element;

export { DotPattern };
