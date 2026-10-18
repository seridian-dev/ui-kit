import * as React from 'react';
import { Button } from './button.js';
import 'class-variance-authority/types';
import 'class-variance-authority';

declare function NumberField({ value: valueProp, defaultValue, onValueChange, min, max, step, size, disabled, readOnly, name, format, children, }: {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number | undefined) => void;
    min?: number;
    max?: number;
    step?: number;
    size?: "sm" | "default" | "lg";
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    format?: (value: number) => string;
    children?: React.ReactNode;
}): React.JSX.Element;
declare function NumberFieldGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function NumberFieldDecrement(props: React.ComponentProps<typeof Button>): React.JSX.Element;
declare function NumberFieldIncrement(props: React.ComponentProps<typeof Button>): React.JSX.Element;
declare function NumberFieldInput({ className, ...props }: React.ComponentProps<"input">): React.JSX.Element;

export { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput };
