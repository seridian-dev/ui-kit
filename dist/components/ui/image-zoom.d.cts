import * as React from 'react';

interface ImageZoomProps extends Omit<React.ComponentProps<"img">, "alt"> {
    alt: string;
    zoomClassName?: string;
}
declare function ImageZoom({ alt, src, className, zoomClassName, ...props }: ImageZoomProps): React.JSX.Element;

export { ImageZoom, type ImageZoomProps };
