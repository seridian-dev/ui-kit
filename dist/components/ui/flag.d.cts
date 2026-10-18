import * as React from 'react';

type FlagRatio = "4x3" | "1x1";
/**
 * Country flag rendered via the flag-icons CSS contract
 * (`fi` base class + `fi-{code}` country class, `fis` for 1x1).
 *
 * Sizing: flag-icons scales via font-size (the flag fills an em box), so
 * size via className text-* (font-size drives width/height), e.g. `text-2xl`.
 */
interface FlagProps extends Omit<React.ComponentProps<"span">, "role"> {
    /** ISO 3166-1 alpha-2 code, case-insensitive (normalized to lowercase). */
    country: string;
    /** Aspect ratio; defaults to "4x3". */
    ratio?: FlagRatio;
    /** Hide from assistive technology; defaults to false. */
    decorative?: boolean;
    /** Accessible label override; defaults to `${code.toUpperCase()} flag`. */
    alt?: string;
    /** Add `overflow-hidden rounded-sm` for slightly rounded corners. */
    rounded?: boolean;
}
declare function Flag({ country, ratio, decorative, alt, rounded, className, style, ...props }: FlagProps): React.JSX.Element;

export { Flag, type FlagProps };
