import * as React from 'react';

interface DockProps {
    children: React.ReactNode;
    className?: string;
    /** Icon size at rest, px */
    baseSize?: number;
    /** Icon size under the cursor, px */
    magnification?: number;
    /** Cursor influence radius, px */
    distance?: number;
}
declare function Dock({ children, className, baseSize, magnification, distance, }: DockProps): React.JSX.Element;
interface DockIconProps {
    children: React.ReactNode;
    className?: string;
    label?: string;
}
declare function DockIcon({ children, className, label }: DockIconProps): React.JSX.Element;

export { Dock, DockIcon, type DockIconProps, type DockProps };
