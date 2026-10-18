import * as React from 'react';
import { Button } from './button.js';
import { CommandItem } from './command.js';
import { PopoverContent } from './popover.js';
import 'class-variance-authority/types';
import 'class-variance-authority';
import 'cmdk';
import './dialog.js';
import 'radix-ui';

type ComboboxOption = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
type ComboboxBaseProps = {
    options?: ComboboxOption[];
    disabled?: boolean;
    placeholder?: string;
    children?: React.ReactNode;
};
type ComboboxSingleProps = ComboboxBaseProps & {
    multiple?: false;
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
};
type ComboboxMultipleProps = ComboboxBaseProps & {
    multiple: true;
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
};
type ComboboxProps = ComboboxSingleProps | ComboboxMultipleProps;
declare function Combobox(props: ComboboxProps): React.JSX.Element;
declare function ComboboxTrigger({ className, children, disabled, ...props }: React.ComponentProps<typeof Button>): React.JSX.Element;
declare function ComboboxContent({ className, searchPlaceholder, children, ...props }: React.ComponentProps<typeof PopoverContent> & {
    searchPlaceholder?: string;
}): React.JSX.Element;
declare function ComboboxItem({ value, children, disabled, className, onSelect, ...props }: React.ComponentProps<typeof CommandItem> & {
    value: string;
}): React.JSX.Element;
declare function ComboboxClear({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element | null;

export { Combobox, ComboboxClear, ComboboxContent, ComboboxItem, type ComboboxOption, type ComboboxProps, ComboboxTrigger };
