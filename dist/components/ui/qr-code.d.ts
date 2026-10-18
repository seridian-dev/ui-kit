import * as React from 'react';

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
interface QRCodeProps extends React.ComponentProps<"div"> {
    value: string;
    size?: number;
    level?: ErrorCorrectionLevel;
    marginSize?: number;
    fgColor?: string;
    bgColor?: string;
}
declare function QRCode({ value, size, level, marginSize, fgColor, bgColor, className, style, ...props }: QRCodeProps): React.JSX.Element;

export { QRCode, type ErrorCorrectionLevel as QRCodeErrorCorrectionLevel, type QRCodeProps };
