import * as React from 'react';

interface BrowserMockupProps extends React.HTMLAttributes<HTMLDivElement> {
    url?: string;
    children: React.ReactNode;
}
/**
 * Browser window frame — traffic lights, URL bar, your content inside.
 */
declare function BrowserMockup({ url, className, children, ...props }: BrowserMockupProps): React.JSX.Element;

export { BrowserMockup, type BrowserMockupProps };
