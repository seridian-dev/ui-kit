import * as React from 'react';
import { ReactNode } from 'react';

interface AuroraTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    speed?: number;
}
declare const AuroraText: React.MemoExoticComponent<({ children, className, colors, speed, }: AuroraTextProps) => React.JSX.Element>;

export { AuroraText };
