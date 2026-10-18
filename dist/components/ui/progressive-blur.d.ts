import * as React from 'react';

interface ProgressiveBlurProps {
    className?: string;
    height?: string;
    position?: "top" | "bottom" | "both";
    blurLevels?: number[];
    children?: React.ReactNode;
}
declare function ProgressiveBlur({ className, height, position, blurLevels, }: ProgressiveBlurProps): React.JSX.Element;

export { ProgressiveBlur, type ProgressiveBlurProps };
