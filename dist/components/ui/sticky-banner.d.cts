import * as React from 'react';

interface StickyBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Hide the dismiss button for banners that must stay put */
    dismissible?: boolean;
    /** Called after the banner is dismissed */
    onDismiss?: () => void;
    children: React.ReactNode;
}
/**
 * Announcement bar that pins to the top of the page and can be dismissed.
 * Sits above a sticky header when both are present.
 */
declare function StickyBanner({ dismissible, onDismiss, children, className, ...props }: StickyBannerProps): React.JSX.Element | null;

export { StickyBanner, type StickyBannerProps };
