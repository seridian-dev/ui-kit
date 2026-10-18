import * as React from 'react';

interface ColorPickerProps extends React.ComponentProps<"div"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    presets?: readonly string[];
    enableAlpha?: boolean;
    disabled?: boolean;
}
declare function ColorPicker({ value: controlledValue, defaultValue, onValueChange, presets, enableAlpha, disabled, className, ...props }: ColorPickerProps): React.JSX.Element;

export { ColorPicker, type ColorPickerProps };
