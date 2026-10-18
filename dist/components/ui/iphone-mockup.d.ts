import * as React from 'react';

interface IPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
/**
 * iPhone frame with dynamic island and side buttons — drop any
 * screen content inside.
 */
declare function IPhoneMockup({ className, children, ...props }: IPhoneMockupProps): React.JSX.Element;

export { IPhoneMockup, type IPhoneMockupProps };
