import * as React from 'react';
import { Slider as Slider$1 } from 'radix-ui';

type SliderProps = React.ComponentProps<typeof Slider$1.Root> & {
    /**
     * Accessible name for the thumb at `index`. Needed for multi-thumb
     * sliders whose thumbs mean different things; defaults to `aria-label`
     * ("Price, minimum" / "Price, maximum" for a two-thumb range).
     */
    getAriaLabel?: (index: number) => string;
    /** Human-readable value for the thumb at `index`, e.g. "$40". */
    getAriaValueText?: (value: number, index: number) => string;
};
declare function Slider({ className, defaultValue, value, min, max, getAriaLabel, getAriaValueText, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onValueChange, ...props }: SliderProps): React.JSX.Element;

export { Slider };
