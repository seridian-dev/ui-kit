import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import React__default, { ReactNode, Dispatch, SetStateAction, PropsWithChildren, RefObject, ComponentPropsWithoutRef, FC } from 'react';
import { VariantProps } from 'class-variance-authority';
import { Toggle as Toggle$1, ToggleGroup as ToggleGroup$1, Toolbar as Toolbar$1, Checkbox as Checkbox$1, Dialog as Dialog$1, Popover as Popover$1, Label as Label$1, RadioGroup as RadioGroup$1, Select as Select$1, Slider as Slider$1, Switch as Switch$1, Accordion as Accordion$1, Collapsible as Collapsible$1, ScrollArea as ScrollArea$1, Separator as Separator$1, Tabs as Tabs$1, AlertDialog as AlertDialog$1, ContextMenu as ContextMenu$1, DropdownMenu as DropdownMenu$1, HoverCard as HoverCard$1, Menubar as Menubar$1, Tooltip as Tooltip$1, NavigationMenu as NavigationMenu$1, Avatar as Avatar$2, Progress as Progress$1 } from 'radix-ui';
import { DayPicker, DayButton, Locale } from 'react-day-picker';
import { Command as Command$1 } from 'cmdk';
import { Editor as Editor$1, UseEditorOptions } from '@tiptap/react';
export { useEditorState } from '@tiptap/react';
import { OTPInput } from 'input-otp';
import { Drawer as Drawer$1 } from 'vaul';
import { ToasterProps } from 'sonner';
import { MotionProps as MotionProps$1, UseInViewOptions, Transition, DOMMotionComponents, HTMLMotionProps } from 'motion/react';
import { Options, GlobalOptions } from 'canvas-confetti';
import * as framer_motion from 'framer-motion';

declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Kbd({ className, ...props }: React$1.ComponentProps<"kbd">): React$1.JSX.Element;
declare function KbdGroup({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function SegmentedControl({ className, value, onChange, label, fill, children, ...props }: Omit<React$1.ComponentProps<"div">, "onChange"> & {
    value: string;
    onChange: (value: string) => void;
    label: string;
    fill?: boolean;
}): React$1.JSX.Element;
declare function SegmentedControlItem({ className, value: itemValue, disabled, children, ...props }: React$1.ComponentProps<"button"> & {
    value: string;
}): React$1.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React$1.ComponentProps<typeof Toggle$1.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function ToggleGroup({ className, variant, size, spacing, orientation, children, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Root> & VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
}): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroup$1.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function Toolbar({ className, orientation, ...props }: React$1.ComponentProps<typeof Toolbar$1.Root>): React$1.JSX.Element;
declare function ToolbarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function ToolbarButton({ className, variant, size, ...props }: React$1.ComponentProps<typeof Toolbar$1.Button> & Pick<VariantProps<typeof buttonVariants>, "variant" | "size">): React$1.JSX.Element;
declare function ToolbarSeparator({ className, ...props }: React$1.ComponentProps<typeof Toolbar$1.Separator>): React$1.JSX.Element;
declare function ToolbarLink({ className, ...props }: React$1.ComponentProps<typeof Toolbar$1.Link>): React$1.JSX.Element;
declare function ToolbarToggleGroup({ className, ...props }: React$1.ComponentProps<typeof Toolbar$1.ToggleGroup>): React$1.JSX.Element;
declare function ToolbarToggleItem({ className, variant, size, ...props }: React$1.ComponentProps<typeof Toolbar$1.ToggleItem> & Pick<VariantProps<typeof toggleVariants>, "variant" | "size">): React$1.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, locale, formatters, components, ...props }: React$1.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React$1.ComponentProps<typeof Button>["variant"];
}): React$1.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, locale, ...props }: React$1.ComponentProps<typeof DayButton> & {
    locale?: Partial<Locale>;
}): React$1.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof Checkbox$1.Root>): React$1.JSX.Element;

interface ColorPickerProps extends React$1.ComponentProps<"div"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    presets?: readonly string[];
    enableAlpha?: boolean;
    disabled?: boolean;
}
declare function ColorPicker({ value: controlledValue, defaultValue, onValueChange, presets, enableAlpha, disabled, className, ...props }: ColorPickerProps): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof Dialog$1.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React$1.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function Command({ className, ...props }: React$1.ComponentProps<typeof Command$1>): React$1.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function CommandInput({ className, ...props }: React$1.ComponentProps<typeof Command$1.Input>): React$1.JSX.Element;
declare function CommandList({ className, ...props }: React$1.ComponentProps<typeof Command$1.List>): React$1.JSX.Element;
declare function CommandEmpty({ className, ...props }: React$1.ComponentProps<typeof Command$1.Empty>): React$1.JSX.Element;
declare function CommandGroup({ className, ...props }: React$1.ComponentProps<typeof Command$1.Group>): React$1.JSX.Element;
declare function CommandSeparator({ className, ...props }: React$1.ComponentProps<typeof Command$1.Separator>): React$1.JSX.Element;
declare function CommandItem({ className, children, ...props }: React$1.ComponentProps<typeof Command$1.Item>): React$1.JSX.Element;
declare function CommandShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof Popover$1.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof Popover$1.Trigger>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof Popover$1.Content>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof Popover$1.Anchor>): React$1.JSX.Element;
declare function PopoverHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function PopoverTitle({ className, ...props }: React$1.ComponentProps<"h2">): React$1.JSX.Element;
declare function PopoverDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;

type ComboboxOption = {
    value: string;
    label: React$1.ReactNode;
    disabled?: boolean;
};
type ComboboxBaseProps = {
    options?: ComboboxOption[];
    disabled?: boolean;
    placeholder?: string;
    children?: React$1.ReactNode;
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
declare function Combobox(props: ComboboxProps): React$1.JSX.Element;
declare function ComboboxTrigger({ className, children, disabled, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function ComboboxContent({ className, searchPlaceholder, children, ...props }: React$1.ComponentProps<typeof PopoverContent> & {
    searchPlaceholder?: string;
}): React$1.JSX.Element;
declare function ComboboxItem({ value, children, disabled, className, onSelect, ...props }: React$1.ComponentProps<typeof CommandItem> & {
    value: string;
}): React$1.JSX.Element;
declare function ComboboxClear({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element | null;

type DatePickerFieldProps = React.ComponentProps<"div">;
declare function DatePickerField({ className, ...props }: DatePickerFieldProps): React$1.JSX.Element;

type DateRangePickerFieldProps = React.ComponentProps<"div">;
declare function DateRangePickerField({ className, ...props }: DateRangePickerFieldProps): React$1.JSX.Element;

declare function formatBytes(bytes: number, decimals?: number): string;
type DropzoneRejection = {
    id: string;
    name: string;
    reason: string;
};
declare function Dropzone({ accept, maxSize, maxFiles, multiple, disabled, hint, onFilesAdded, className, ...props }: React$1.ComponentProps<"div"> & {
    accept?: string;
    maxSize?: number;
    maxFiles?: number;
    multiple?: boolean;
    disabled?: boolean;
    hint?: string;
    onFilesAdded?: (files: File[]) => void;
}): React$1.JSX.Element;

interface EditorProps {
    /** Initial HTML content. */
    content?: string;
    /** Called with the editor's HTML on every document update. */
    onValueChange?: (html: string) => void;
    /** Called once the underlying Tiptap editor instance is created. */
    onEditorReady?: (editor: Editor$1) => void;
    /** @default true */
    editable?: boolean;
    /** @default "Write something …" */
    placeholder?: string;
    /** @default true */
    toolbar?: boolean;
    className?: string;
    /** Passed through to the underlying Tiptap editor. */
    editorProps?: UseEditorOptions["editorProps"];
}
declare function EditorToolbar({ editor }: {
    editor: Editor$1 | null;
}): React$1.JSX.Element | null;
declare function Editor({ content, onValueChange, onEditorReady, editable, placeholder, toolbar, className, editorProps, }: EditorProps): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function InputGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React$1.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React$1.ComponentProps<typeof Button>, "size"> & VariantProps<typeof inputGroupButtonVariants>): React$1.JSX.Element;
declare function InputGroupText({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function InputGroupInput({ className, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): React$1.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): React$1.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;

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
    children?: React$1.ReactNode;
}): React$1.JSX.Element;
declare function NumberFieldGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function NumberFieldDecrement(props: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function NumberFieldIncrement(props: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function NumberFieldInput({ className, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

type PasswordStrengthInputProps = React.ComponentProps<"div">;
type PasswordStrengthRequirement = {
    met: boolean;
    text: string;
};
declare function PasswordStrengthInput({ className, ...props }: PasswordStrengthInputProps): React$1.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Root>): React$1.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Item>): React$1.JSX.Element;

type RatingItem = {
    value: string;
    label: string;
    icon: React.ReactNode;
};
type RatingInputProps = React.ComponentProps<"fieldset"> & {
    items?: RatingItem[];
    legend?: React.ReactNode;
    defaultValue?: string;
};
declare function RatingInput({ items, legend, defaultValue, className, ...props }: RatingInputProps): React$1.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof Select$1.Root>): React$1.JSX.Element;
declare function SelectGroup({ className, ...props }: React$1.ComponentProps<typeof Select$1.Group>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof Select$1.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof Select$1.Trigger> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, align, ...props }: React$1.ComponentProps<typeof Select$1.Content>): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof Select$1.Label>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof Select$1.Item>): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof Select$1.Separator>): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollUpButton>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof Select$1.ScrollDownButton>): React$1.JSX.Element;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React$1.ComponentProps<typeof Slider$1.Root>): React$1.JSX.Element;

declare function Switch({ className, size, ...props }: React$1.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function Accordion({ className, ...props }: React$1.ComponentProps<typeof Accordion$1.Root>): React$1.JSX.Element;
declare function AccordionItem({ className, ...props }: React$1.ComponentProps<typeof Accordion$1.Item>): React$1.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React$1.ComponentProps<typeof Accordion$1.Trigger>): React$1.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React$1.ComponentProps<typeof Accordion$1.Content>): React$1.JSX.Element;

declare function BentoGrid({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function BentoCard({ name, className, background, Icon, description, href, cta, ...props }: React$1.ComponentProps<"div"> & {
    name: string;
    className: string;
    background: React$1.ReactNode;
    Icon: React$1.ElementType;
    description: string;
    href: string;
    cta: string;
}): React$1.JSX.Element;

declare function Card({ className, size, ...props }: React$1.ComponentProps<"div"> & {
    size?: "default" | "sm";
}): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof Collapsible$1.Root>): React$1.JSX.Element;
declare function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof Collapsible$1.CollapsibleTrigger>): React$1.JSX.Element;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof Collapsible$1.CollapsibleContent>): React$1.JSX.Element;

type Tab = {
    id: number;
    label: string;
    content: ReactNode;
};
interface OgImageSectionProps {
    tabs: Tab[];
    className?: string;
    /** Outer container radius (e.g. `rounded-lg`) */
    rounded?: string;
    /** Inner tab/bubble radius — should be outer radius minus container padding (~3px) */
    roundedInner?: string;
    onChange?: () => void;
}
declare function DirectionAwareTabs({ tabs, className, rounded, roundedInner, onChange, }: OgImageSectionProps): React$1.JSX.Element;

declare function ScrollArea({ className, children, ...props }: React$1.ComponentProps<typeof ScrollArea$1.Root>): React$1.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React$1.ComponentProps<typeof ScrollArea$1.ScrollAreaScrollbar>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

type Item = {
    text: string;
    checked: boolean;
    id: number;
    description: string;
};
interface SortableListItemProps {
    item: Item;
    order: number;
    onCompleteItem: (id: number) => void;
    onRemoveItem: (id: number) => void;
    renderExtra?: (item: Item) => React.ReactNode;
    isExpanded?: boolean;
    className?: string;
    handleDrag: () => void;
}
declare function SortableListItem({ item, order, onCompleteItem, onRemoveItem, renderExtra, handleDrag, isExpanded, className, }: SortableListItemProps): React$1.JSX.Element;
declare namespace SortableListItem {
    var displayName: string;
}
interface SortableListProps {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
    onCompleteItem: (id: number) => void;
    renderItem: (item: Item, order: number, onCompleteItem: (id: number) => void, onRemoveItem: (id: number) => void) => ReactNode;
}
declare function SortableList({ items, setItems, onCompleteItem, renderItem, }: SortableListProps): React$1.JSX.Element | null;
declare namespace SortableList {
    var displayName: string;
}

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({ className, ...props }: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({ className, ...props }: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({ className, ...props }: React$1.ComponentProps<"caption">): React$1.JSX.Element;

declare function Tabs({ className, orientation, ...props }: React$1.ComponentProps<typeof Tabs$1.Root>): React$1.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: React$1.ComponentProps<typeof Tabs$1.List> & VariantProps<typeof tabsListVariants>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Content>): React$1.JSX.Element;

type TreeNodeData = {
    id: string;
    label: string;
    icon?: React$1.ReactNode;
    children?: TreeNodeData[];
};
declare function Tree({ data, expandedIds: expandedIdsProp, defaultExpandedIds, onExpandedChange, selectedId: selectedIdProp, defaultSelectedId, onSelectionChange, className, ...props }: React$1.ComponentProps<"ul"> & {
    data: TreeNodeData[];
    expandedIds?: string[];
    defaultExpandedIds?: string[];
    onExpandedChange?: (expandedIds: string[]) => void;
    selectedId?: string | null;
    defaultSelectedId?: string | null;
    onSelectionChange?: (id: string | null) => void;
}): React$1.JSX.Element;
declare function TreeNode({ node, depth }: {
    node: TreeNodeData;
    depth?: number;
}): React$1.JSX.Element;

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Root>): React$1.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Trigger>): React$1.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialog$1.Portal>): React$1.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Overlay>): React$1.JSX.Element;
declare function AlertDialogContent({ className, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Content> & {
    size?: "default" | "sm";
}): React$1.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogMedia({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Title>): React$1.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Description>): React$1.JSX.Element;
declare function AlertDialogAction({ className, variant, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Action> & Pick<React$1.ComponentProps<typeof Button>, "variant" | "size">): React$1.JSX.Element;
declare function AlertDialogCancel({ className, variant, size, ...props }: React$1.ComponentProps<typeof AlertDialog$1.Cancel> & Pick<React$1.ComponentProps<typeof Button>, "variant" | "size">): React$1.JSX.Element;

declare function ContextMenu({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Root>): React$1.JSX.Element;
declare function ContextMenuTrigger({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Trigger>): React$1.JSX.Element;
declare function ContextMenuGroup({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Group>): React$1.JSX.Element;
declare function ContextMenuPortal({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Portal>): React$1.JSX.Element;
declare function ContextMenuSub({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.Sub>): React$1.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof ContextMenu$1.RadioGroup>): React$1.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): React$1.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof ContextMenu$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.SubContent>): React$1.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, inset, ...props }: React$1.ComponentProps<typeof ContextMenu$1.CheckboxItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuRadioItem({ className, children, inset, ...props }: React$1.ComponentProps<typeof ContextMenu$1.RadioItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof ContextMenu$1.Separator>): React$1.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Drawer({ ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): React$1.JSX.Element;
declare function DrawerTrigger({ ...props }: React$1.ComponentProps<typeof Drawer$1.Trigger>): React$1.JSX.Element;
declare function DrawerPortal({ ...props }: React$1.ComponentProps<typeof Drawer$1.Portal>): React$1.JSX.Element;
declare function DrawerClose({ ...props }: React$1.ComponentProps<typeof Drawer$1.Close>): React$1.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Overlay>): React$1.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React$1.ComponentProps<typeof Drawer$1.Content>): React$1.JSX.Element;
declare function DrawerHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerTitle({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Title>): React$1.JSX.Element;
declare function DrawerDescription({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.CheckboxItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubContent>): React$1.JSX.Element;

declare const stiffness = 400;
declare const damping = 30;
type SizePresets = "reset" | "empty" | "default" | "compact" | "compactLong" | "large" | "long" | "minimalLeading" | "minimalTrailing" | "compactMedium" | "medium" | "tall" | "ultra" | "massive";
declare const SIZE_PRESETS: {
    readonly RESET: "reset";
    readonly EMPTY: "empty";
    readonly DEFAULT: "default";
    readonly COMPACT: "compact";
    readonly COMPACT_LONG: "compactLong";
    readonly LARGE: "large";
    readonly LONG: "long";
    readonly MINIMAL_LEADING: "minimalLeading";
    readonly MINIMAL_TRAILING: "minimalTrailing";
    readonly COMPACT_MEDIUM: "compactMedium";
    readonly MEDIUM: "medium";
    readonly TALL: "tall";
    readonly ULTRA: "ultra";
    readonly MASSIVE: "massive";
};
type Preset = {
    width: number;
    height?: number;
    aspectRatio: number;
    borderRadius: number;
};
declare const DynamicIslandSizePresets: Record<SizePresets, Preset>;
type BlobStateType = {
    size: SizePresets;
    previousSize: SizePresets | undefined;
    animationQueue: Array<{
        size: SizePresets;
        delay: number;
    }>;
    isAnimating: boolean;
};
type BlobAction = {
    type: "SET_SIZE";
    newSize: SizePresets;
} | {
    type: "INITIALIZE";
    firstState: SizePresets;
} | {
    type: "SCHEDULE_ANIMATION";
    animationSteps: Array<{
        size: SizePresets;
        delay: number;
    }>;
} | {
    type: "ANIMATION_END";
};
type BlobContextType = {
    state: BlobStateType;
    dispatch: React__default.Dispatch<BlobAction>;
    setSize: (size: SizePresets) => void;
    scheduleAnimation: (animationSteps: Array<{
        size: SizePresets;
        delay: number;
    }>) => void;
    presets: Record<SizePresets, Preset>;
};
declare const BlobContext: React__default.Context<BlobContextType | undefined>;
interface DynamicIslandProviderProps {
    children: React__default.ReactNode;
    initialSize?: SizePresets;
    initialAnimation?: Array<{
        size: SizePresets;
        delay: number;
    }>;
}
declare const DynamicIslandProvider: React__default.FC<DynamicIslandProviderProps>;
declare const useDynamicIslandSize: () => BlobContextType;
declare const useScheduledAnimations: (animations: Array<{
    size: SizePresets;
    delay: number;
}>) => void;
declare const DynamicIsland: ({ children, id, ...props }: {
    children: ReactNode;
    id: string;
}) => React__default.JSX.Element;
type DynamicContainerProps = {
    className?: string;
    children?: React__default.ReactNode;
};
declare const DynamicContainer: ({ className, children }: DynamicContainerProps) => React__default.JSX.Element;
type DynamicChildrenProps = {
    className?: string;
    children?: React__default.ReactNode;
};
declare const DynamicDiv: ({ className, children }: DynamicChildrenProps) => React__default.JSX.Element;
type MotionProps = {
    className: string;
    children: React__default.ReactNode;
};
declare const DynamicTitle: ({ className, children }: MotionProps) => React__default.JSX.Element;
declare const DynamicDescription: ({ className, children }: MotionProps) => React__default.JSX.Element;

declare function HoverCard({ ...props }: React$1.ComponentProps<typeof HoverCard$1.Root>): React$1.JSX.Element;
declare function HoverCardTrigger({ ...props }: React$1.ComponentProps<typeof HoverCard$1.Trigger>): React$1.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof HoverCard$1.Content>): React$1.JSX.Element;

interface ImageZoomProps extends Omit<React$1.ComponentProps<"img">, "alt"> {
    alt: string;
    zoomClassName?: string;
}
declare function ImageZoom({ alt, src, className, zoomClassName, ...props }: ImageZoomProps): React$1.JSX.Element;

declare function Menubar({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Root>): React$1.JSX.Element;
declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof Menubar$1.Menu>): React$1.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof Menubar$1.Group>): React$1.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof Menubar$1.Portal>): React$1.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof Menubar$1.RadioGroup>): React$1.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Trigger>): React$1.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React$1.ComponentProps<typeof Menubar$1.Content>): React$1.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof Menubar$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, inset, ...props }: React$1.ComponentProps<typeof Menubar$1.CheckboxItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarRadioItem({ className, children, inset, ...props }: React$1.ComponentProps<typeof Menubar$1.RadioItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React$1.ComponentProps<typeof Menubar$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.Separator>): React$1.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof Menubar$1.Sub>): React$1.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof Menubar$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React$1.ComponentProps<typeof Menubar$1.SubContent>): React$1.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function SheetContent({ className, children, side, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    side?: "top" | "right" | "bottom" | "left";
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

interface StickyBannerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Hide the dismiss button for banners that must stay put */
    dismissible?: boolean;
    /** Called after the banner is dismissed */
    onDismiss?: () => void;
    children: React$1.ReactNode;
}
/**
 * Announcement bar that pins to the top of the page and can be dismissed.
 * Sits above a sticky header when both are present.
 */
declare function StickyBanner({ dismissible, onDismiss, children, className, ...props }: StickyBannerProps): React$1.JSX.Element | null;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;

declare function Breadcrumb({ className, ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React$1.ComponentProps<"ol">): React$1.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

interface DockProps {
    children: React$1.ReactNode;
    className?: string;
    /** Icon size at rest, px */
    baseSize?: number;
    /** Icon size under the cursor, px */
    magnification?: number;
    /** Cursor influence radius, px */
    distance?: number;
}
declare function Dock({ children, className, baseSize, magnification, distance, }: DockProps): React$1.JSX.Element;
interface DockIconProps {
    children: React$1.ReactNode;
    className?: string;
    label?: string;
}
declare function DockIcon({ children, className, label }: DockIconProps): React$1.JSX.Element;

declare function NavigationMenu({ className, children, viewport, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Root> & {
    viewport?: boolean;
}): React$1.JSX.Element;
declare function NavigationMenuList({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.List>): React$1.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Item>): React$1.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Trigger>): React$1.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Content>): React$1.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Viewport>): React$1.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Link>): React$1.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: React$1.ComponentProps<typeof NavigationMenu$1.Indicator>): React$1.JSX.Element;

declare const stepIndicatorVariants: (props?: ({
    variant?: "dots" | "pills" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const stepDotVariants: (props?: ({
    variant?: "dots" | "pills" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StepIndicatorProps extends React$1.ComponentPropsWithoutRef<"div">, VariantProps<typeof stepIndicatorVariants>, VariantProps<typeof stepDotVariants> {
    /** Current step index (1-based) */
    currentStep: number;
    /** Total number of steps */
    totalSteps: number;
    /** Optional className for each step dot */
    dotClassName?: string;
}
/**
 * Headless step indicator primitive.
 * Renders a list of step dots with proper ARIA for progress indication.
 * No visual styling—consumer provides via className.
 */
declare function StepIndicator({ currentStep, totalSteps, variant, className, dotClassName, ...props }: StepIndicatorProps): React$1.JSX.Element;
interface OnboardingContextValue {
    /** Current step index (1-based) */
    currentStep: number;
    /** Total number of steps */
    totalSteps: number;
    /** Sub-step value (e.g. feature carousel index within step 1) */
    stepValue: number;
    /** Set current step */
    setStep: (step: number | ((prev: number) => number)) => void;
    /** Set step value (sub-step) */
    setStepValue: (value: number | ((prev: number) => number)) => void;
    /** Max step value for current step (e.g. feature count - 1) */
    maxStepValue: number;
    /** Whether user can proceed to next */
    canGoNext: boolean;
    /** Whether user can go back */
    canGoBack: boolean;
    /** Navigate to previous step */
    handleBack: () => void;
    /** Navigate to next step or advance sub-step */
    handleNext: () => void;
    /** Complete onboarding */
    handleComplete: () => void;
    /** Callback when onboarding is completed */
    onComplete?: () => void;
}
declare function useOnboarding(): OnboardingContextValue;
interface OnboardingRootProps extends PropsWithChildren, Omit<React$1.ComponentPropsWithoutRef<"div">, "children"> {
    /** Controlled step index (1-based) */
    value?: number;
    /** Default step index (uncontrolled) */
    defaultValue?: number;
    /** Callback when step changes */
    onValueChange?: (step: number) => void;
    /** Controlled sub-step value */
    stepValue?: number;
    /** Default sub-step value (uncontrolled) */
    defaultStepValue?: number;
    /** Callback when sub-step value changes */
    onStepValueChange?: (value: number) => void;
    /** Total number of steps */
    totalSteps: number;
    /** Max sub-step value for step 1 (e.g. feature count - 1). Default 0 = no sub-steps */
    maxStepValue?: number;
    /** Callback when onboarding is completed */
    onComplete?: () => void;
    /** Custom logic for whether user can proceed. Receives (step, stepValue). Default: true */
    canGoNext?: (step: number, stepValue: number) => boolean;
}
declare function OnboardingRoot({ value: controlledValue, defaultValue, onValueChange, stepValue: controlledStepValue, defaultStepValue, onStepValueChange, totalSteps, maxStepValue: controlledMaxStepValue, onComplete, canGoNext: canGoNextFn, children, className, ...props }: OnboardingRootProps): React$1.JSX.Element;
interface OnboardingStepProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Step index (1-based) - content renders when currentStep matches */
    step: number;
}
declare function OnboardingStep({ step, children, className, ...props }: OnboardingStepProps): React$1.JSX.Element | null;
interface OnboardingStepIndicatorProps extends Omit<React$1.ComponentProps<typeof StepIndicator>, "currentStep" | "totalSteps"> {
}
declare function OnboardingStepIndicator(props: OnboardingStepIndicatorProps): React$1.JSX.Element;
interface OnboardingHeaderProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Step title (optional when using children) */
    title?: string;
    /** Step description */
    description?: string;
    /** Custom header content (overrides title/description) */
    children?: React$1.ReactNode;
}
declare function OnboardingHeader({ title, description, children, className, ...props }: OnboardingHeaderProps): React$1.JSX.Element;
interface OnboardingNavigationProps extends React$1.ComponentPropsWithoutRef<"fieldset"> {
    /** Back button label */
    backLabel?: string;
    /** Next button label */
    nextLabel?: string;
    /** Complete button label */
    completeLabel?: string;
    /** Override can go next (when not using Root's canGoNext) */
    canGoNext?: boolean;
    /** Custom navigation content (use with asChild for full control) */
    children?: React$1.ReactNode;
}
declare function OnboardingNavigation({ backLabel, nextLabel, completeLabel, canGoNext: canGoNextOverride, children, className, ...props }: OnboardingNavigationProps): React$1.JSX.Element;
type Orientation = "horizontal" | "vertical" | "grid";
interface ChoiceGroupProps extends Omit<React$1.ComponentPropsWithoutRef<"div">, "defaultValue"> {
    /** Controlled selected value */
    value?: string | null;
    /** Default selected value (uncontrolled) */
    defaultValue?: string | null;
    /** Callback when selection changes */
    onValueChange?: (value: string) => void;
    /** Name for radio group semantics (required for accessibility) */
    name: string;
    /** Layout orientation */
    orientation?: Orientation;
}
declare function ChoiceGroupRoot({ value: controlledValue, defaultValue, onValueChange, name, orientation, children, className, ...props }: ChoiceGroupProps): React$1.JSX.Element;
interface ChoiceGroupItemProps extends React$1.ComponentPropsWithoutRef<"label"> {
    /** Value when this item is selected */
    value: string;
}
declare function ChoiceGroupItemComponent({ value: itemValue, children, className, ...props }: ChoiceGroupItemProps): React$1.JSX.Element;
declare namespace ChoiceGroupItemComponent {
    var displayName: string;
}
declare const ChoiceGroup: typeof ChoiceGroupRoot & {
    Item: typeof ChoiceGroupItemComponent;
};
interface FeatureCarouselProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Controlled active index */
    value?: number;
    /** Default active index (uncontrolled) */
    defaultValue?: number;
    /** Callback when active index changes */
    onValueChange?: (index: number) => void;
    /** Total number of items (derived from children if not provided) */
    totalItems?: number;
}
declare function FeatureCarouselRoot({ value: controlledValue, defaultValue, onValueChange, totalItems: totalItemsProp, children, className, ...props }: FeatureCarouselProps): React$1.JSX.Element;
interface FeatureCarouselItemProps extends React$1.ComponentPropsWithoutRef<"button"> {
    /** Index of this item (0-based) */
    index: number;
}
declare function FeatureCarouselItemComponent({ index, children, className, onClick, ...props }: FeatureCarouselItemProps): React$1.JSX.Element;
declare namespace FeatureCarouselItemComponent {
    var displayName: string;
}
declare const FeatureCarousel: typeof FeatureCarouselRoot & {
    Item: typeof FeatureCarouselItemComponent;
};
interface TipsListProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Optional title/label for the list */
    title?: string;
}
/**
 * Headless tips list primitive.
 * Renders an ordered list with optional title.
 * No visual styling—consumer provides via className.
 */
declare function TipsListRoot({ title, children, className, ...props }: TipsListProps): React$1.JSX.Element;
interface TipsListItemProps extends React$1.ComponentPropsWithoutRef<"li"> {
    /** Optional number to display (for custom styling) */
    number?: number;
}
declare function TipsListItemComponent({ number, children, className, ...props }: TipsListItemProps): React$1.JSX.Element;
declare const TipsList: typeof TipsListRoot & {
    Item: typeof TipsListItemComponent;
};
declare const Onboarding: typeof OnboardingRoot & {
    Step: typeof OnboardingStep;
    StepIndicator: typeof OnboardingStepIndicator;
    Header: typeof OnboardingHeader;
    Navigation: typeof OnboardingNavigation;
};

declare function Pagination({ className, ...props }: React$1.ComponentProps<"nav">): React$1.JSX.Element;
declare function PaginationContent({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function PaginationItem({ ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React$1.ComponentProps<typeof Button>, "size"> & React$1.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): React$1.JSX.Element;
declare function PaginationPrevious({ className, text, ...props }: React$1.ComponentProps<typeof PaginationLink> & {
    text?: string;
}): React$1.JSX.Element;
declare function PaginationNext({ className, text, ...props }: React$1.ComponentProps<typeof PaginationLink> & {
    text?: string;
}): React$1.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

interface StepperProps {
    steps: string[];
    /** Zero-based index of the step in progress */
    current: number;
    /** Make completed steps clickable */
    onStepClick?: (index: number) => void;
    className?: string;
}
/**
 * Horizontal progress indicator for multi-step forms and checkouts.
 * The connecting bar fills as steps complete.
 */
declare function Stepper({ steps, current, onStepClick, className }: StepperProps): React$1.JSX.Element;

interface BrowserMockupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    url?: string;
    children: React$1.ReactNode;
}
/**
 * Browser window frame — traffic lights, URL bar, your content inside.
 */
declare function BrowserMockup({ url, className, children, ...props }: BrowserMockupProps): React$1.JSX.Element;

interface CodeTab {
    label: string;
    code: string;
    language?: string;
}
interface CodeBlockProps {
    tabs?: CodeTab[];
    code?: string;
    language?: string;
    className?: string;
}
declare function CodeBlock({ tabs, code, language, className, }: CodeBlockProps): React$1.JSX.Element | null;

interface CompareSliderProps {
    before: React$1.ReactNode;
    after: React$1.ReactNode;
    /** Starting divider position, 0–100 */
    initial?: number;
    /** Announced by the slider handle */
    label?: string;
    className?: string;
}
/**
 * Before/after wipe with a draggable divider. The handle is a real range
 * input, so it works with arrow keys and screen readers for free.
 */
declare function CompareSlider({ before, after, initial, label, className, }: CompareSliderProps): React$1.JSX.Element;

interface ContributionDataPoint {
    date: string;
    count: number;
}
interface ContributionGraphProps extends Omit<React$1.ComponentProps<"div">, "children"> {
    data: ContributionDataPoint[];
    max?: number;
    monthLabels?: boolean;
    weekdayLabels?: "none" | "left";
}
declare function ContributionGraph({ data, max: maxProp, monthLabels: showMonthLabels, weekdayLabels, className, ...props }: ContributionGraphProps): React$1.JSX.Element;

type FlagRatio = "4x3" | "1x1";
/**
 * Country flag rendered via the flag-icons CSS contract
 * (`fi` base class + `fi-{code}` country class, `fis` for 1x1).
 *
 * Sizing: flag-icons scales via font-size (the flag fills an em box), so
 * size via className text-* (font-size drives width/height), e.g. `text-2xl`.
 */
interface FlagProps extends Omit<React$1.ComponentProps<"span">, "role"> {
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
declare function Flag({ country, ratio, decorative, alt, rounded, className, style, ...props }: FlagProps): React$1.JSX.Element;

interface IPhoneMockupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    children: React$1.ReactNode;
}
/**
 * iPhone frame with dynamic island and side buttons — drop any
 * screen content inside.
 */
declare function IPhoneMockup({ className, children, ...props }: IPhoneMockupProps): React$1.JSX.Element;

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
interface QRCodeProps extends React$1.ComponentProps<"div"> {
    value: string;
    size?: number;
    level?: ErrorCorrectionLevel;
    marginSize?: number;
    fgColor?: string;
    bgColor?: string;
}
declare function QRCode({ value, size, level, marginSize, fgColor, bgColor, className, style, ...props }: QRCodeProps): React$1.JSX.Element;

declare function Snippet({ code, children, label, showPrompt, className, ...props }: React$1.ComponentProps<"figure"> & {
    code?: string | string[];
    label?: string;
    showPrompt?: boolean;
}): React$1.JSX.Element;

interface TerminalProps {
    /** Lines to type. Prefix with "$ " to render a prompt-colored command. */
    lines: string[];
    title?: string;
    /** ms per character */
    speed?: number;
    className?: string;
}
/**
 * A terminal window that types its lines when scrolled into view.
 */
declare function Terminal({ lines, title, speed, className, }: TerminalProps): React$1.JSX.Element;

interface TimelineProps extends React$1.HTMLAttributes<HTMLDivElement> {
    defaultValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    orientation?: "horizontal" | "vertical";
}
declare function Timeline({ defaultValue, value, onValueChange, orientation, className, ...props }: TimelineProps): React$1.JSX.Element;
declare function TimelineContent({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
interface TimelineDateProps extends React$1.HTMLAttributes<HTMLTimeElement> {
    asChild?: boolean;
}
declare function TimelineDate({ asChild, className, ...props }: TimelineDateProps): React$1.JSX.Element;
declare function TimelineHeader({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
interface TimelineIndicatorProps extends React$1.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
declare function TimelineIndicator({ asChild, className, children, ...props }: TimelineIndicatorProps): React$1.JSX.Element;
interface TimelineItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    step: number;
}
declare function TimelineItem({ step, className, ...props }: TimelineItemProps): React$1.JSX.Element;
declare function TimelineSeparator({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): React$1.JSX.Element;
declare function TimelineTitle({ className, ...props }: React$1.HTMLAttributes<HTMLHeadingElement>): React$1.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React$1.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

interface AnimatedCircularProgressBarProps {
    max?: number;
    min?: number;
    value: number;
    gaugePrimaryColor: string;
    gaugeSecondaryColor: string;
    className?: string;
}
declare function AnimatedCircularProgressBar({ max, min, value, gaugePrimaryColor, gaugeSecondaryColor, className, }: AnimatedCircularProgressBarProps): React$1.JSX.Element;

declare function Avatar$1({ className, size, ...props }: React$1.ComponentProps<typeof Avatar$2.Root> & {
    size?: "default" | "sm" | "lg";
}): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof Avatar$2.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof Avatar$2.Fallback>): React$1.JSX.Element;
declare function AvatarBadge({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function AvatarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

interface Avatar {
    imageUrl: string;
    profileUrl: string;
}
interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: Avatar[];
}
declare const AvatarCircles: ({ numPeople, className, avatarUrls, }: AvatarCirclesProps) => React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function EmptyState({ className, title, description, icon, actions, ...props }: React$1.ComponentProps<"div"> & {
    title: string;
    description?: string;
    icon?: React$1.ReactNode;
    actions?: React$1.ReactNode;
}): React$1.JSX.Element;

declare function Meter({ className, value, min, max, format, ...props }: React$1.ComponentProps<"div"> & {
    value: number;
    min?: number;
    max?: number;
    format?: (value: number) => string;
}): React$1.JSX.Element;
declare function MeterLabel({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MeterValue({ className, children, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MeterTrack({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function MeterIndicator({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Progress({ className, value, ...props }: React$1.ComponentProps<typeof Progress$1.Root>): React$1.JSX.Element;

declare function RelativeTime({ date, interval, prefix, suffix, className, ...props }: React$1.ComponentProps<"time"> & {
    date: Date | string | number;
    interval?: number;
    prefix?: React$1.ReactNode;
    suffix?: React$1.ReactNode;
}): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare const Toaster: ({ theme, ...props }: ToasterProps) => React$1.JSX.Element;

declare const spinnerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Spinner({ className, size, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof spinnerVariants>): React$1.JSX.Element;

declare const timerVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const timerIconVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const timerDisplayVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TimerRootProps = {
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<typeof timerVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type TimerIconProps = {
    /** Custom icon to display instead of default Clock */
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
} & VariantProps<typeof timerIconVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type TimerDisplayProps = {
    /** Time value to display */
    time: string;
    /** Optional label for accessibility */
    label?: string;
} & VariantProps<typeof timerDisplayVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type UseTimerOptions = {
    /** Whether the timer should be running */
    loading?: boolean;
    /** Callback fired on each tick with elapsed time */
    onTick?: (seconds: number, milliseconds: number) => void;
    /** Whether to reset timer when loading state changes */
    resetOnLoadingChange?: boolean;
    /** Time format to use */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
};
type UseTimerReturn = {
    /** Total elapsed seconds */
    elapsedTime: number;
    /** Current milliseconds (0-999) */
    milliseconds: number;
    /** Formatted time strings */
    formattedTime: {
        seconds: string;
        milliseconds: string;
        display: string;
    };
    /** Whether timer is currently running */
    isRunning: boolean;
    /** Reset timer to 0 */
    reset: () => void;
    /** Start the timer */
    start: () => void;
    /** Stop the timer */
    stop: () => void;
};
/**
 * Root container for timer components
 */
declare const TimerRoot: React__default.ForwardRefExoticComponent<{
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Icon component for timer with loading animation
 */
declare const TimerIcon: React__default.ForwardRefExoticComponent<{
    /** Custom icon to display instead of default Clock */
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
} & VariantProps<(props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Display component for formatted time
 */
declare const TimerDisplay: React__default.ForwardRefExoticComponent<{
    /** Time value to display */
    time: string;
    /** Optional label for accessibility */
    label?: string;
} & VariantProps<(props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
type TimerProps = TimerRootProps & UseTimerOptions & {
    /** Time format to display */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
} & React__default.HTMLAttributes<HTMLDivElement>;
declare const Timer: React__default.ForwardRefExoticComponent<{
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & UseTimerOptions & {
    /** Time format to display */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
} & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Hook for managing timer state and formatting
 */
declare function useTimer({ loading, onTick, resetOnLoadingChange, format, }?: UseTimerOptions): UseTimerReturn;

declare function AnimatedBeam({ className, containerRef, fromRef, toRef, curvature, reverse, duration, delay, pathColor, pathWidth, pathOpacity, gradientStartColor, gradientStopColor, repeat, repeatDelay, startXOffset, startYOffset, endXOffset, endYOffset, }: {
    className?: string;
    containerRef: RefObject<HTMLElement | null>;
    fromRef: RefObject<HTMLElement | null>;
    toRef: RefObject<HTMLElement | null>;
    curvature?: number;
    reverse?: boolean;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
    delay?: number;
    duration?: number;
    repeat?: number;
    repeatDelay?: number;
    startXOffset?: number;
    startYOffset?: number;
    endXOffset?: number;
    endYOffset?: number;
}): React$1.JSX.Element;

interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: number;
    numSquares?: number;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}
declare function AnimatedGridPattern({ width, height, x, y, strokeDasharray, numSquares, className, maxOpacity, duration, repeatDelay, ...props }: AnimatedGridPatternProps): React$1.JSX.Element;

declare function AnimatedListItem({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
    children: React__default.ReactNode;
    delay?: number;
}
declare const AnimatedList: React__default.MemoExoticComponent<({ children, className, delay, ...props }: AnimatedListProps) => React__default.JSX.Element>;

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
    shimmerWidth?: number;
}
declare const AnimatedShinyText: FC<AnimatedShinyTextProps>;

interface AuroraTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    speed?: number;
}
declare const AuroraText: React$1.MemoExoticComponent<({ children, className, colors, speed, }: AuroraTextProps) => React$1.JSX.Element>;

type MarginType = UseInViewOptions["margin"];
interface BlurFadeProps extends MotionProps$1 {
    children: React$1.ReactNode;
    className?: string;
    variant?: {
        hidden: {
            y: number;
        };
        visible: {
            y: number;
        };
    };
    duration?: number;
    delay?: number;
    offset?: number;
    direction?: "up" | "down" | "left" | "right";
    inView?: boolean;
    inViewMargin?: MarginType;
    blur?: string;
}
declare function BlurFade({ children, className, variant, duration, delay, offset, direction, inView, inViewMargin, blur, ...props }: BlurFadeProps): React$1.JSX.Element;

declare function BorderBeam({ className, size, delay, duration, colorFrom, colorTo, transition, style, reverse, initialOffset, borderWidth, }: {
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    transition?: Transition;
    className?: string;
    style?: React$1.CSSProperties;
    reverse?: boolean;
    initialOffset?: number;
    borderWidth?: number;
}): React$1.JSX.Element;

type Api = {
    fire: (options?: Options) => void;
};
type ConfettiRef = Api | null;
type ConfettiProps = React__default.ComponentPropsWithoutRef<"canvas"> & {
    ref?: React__default.Ref<ConfettiRef>;
    options?: Options;
    globalOptions?: GlobalOptions;
    manualstart?: boolean;
    children?: ReactNode;
};
declare function Confetti({ ref, options, globalOptions, manualstart, children, ...props }: ConfettiProps): React__default.JSX.Element;
declare function ConfettiButton({ options, children, ...props }: React__default.ComponentProps<"button"> & {
    options?: Options & GlobalOptions & {
        canvas?: HTMLCanvasElement;
    };
}): React__default.JSX.Element;

interface DotPatternProps extends React$1.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
    glow?: boolean;
    [key: string]: unknown;
}
declare function DotPattern({ width, height, x, y, cx, cy, cr, className, glow, ...props }: DotPatternProps): React$1.JSX.Element;

interface GridPatternProps extends React$1.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    squares?: Array<[x: number, y: number]>;
    strokeDasharray?: string;
    className?: string;
    [key: string]: unknown;
}
declare function GridPattern({ width, height, x, y, strokeDasharray, squares, className, ...props }: GridPatternProps): React$1.JSX.Element;

type CharacterSet = string[] | readonly string[];
declare const motionElements$1: {
    readonly article: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"article">>;
    readonly div: framer_motion.ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
    readonly h1: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h1">>;
    readonly h2: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h2">>;
    readonly h3: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h3">>;
    readonly h4: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h4">>;
    readonly h5: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h5">>;
    readonly h6: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h6">>;
    readonly li: framer_motion.ForwardRefComponent<HTMLLIElement, HTMLMotionProps<"li">>;
    readonly p: framer_motion.ForwardRefComponent<HTMLParagraphElement, HTMLMotionProps<"p">>;
    readonly section: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">>;
    readonly span: framer_motion.ForwardRefComponent<HTMLSpanElement, HTMLMotionProps<"span">>;
};
type MotionElementType$1 = Extract<keyof DOMMotionComponents, keyof typeof motionElements$1>;
interface HyperTextProps extends Omit<MotionProps$1, "children"> {
    /** The text content to be animated */
    children: string;
    /** Optional className for styling */
    className?: string;
    /** Duration of the animation in milliseconds */
    duration?: number;
    /** Delay before animation starts in milliseconds */
    delay?: number;
    /** Component to render as - defaults to div */
    as?: MotionElementType$1;
    /** Whether to start animation when element comes into view */
    startOnView?: boolean;
    /** Whether to trigger animation on hover */
    animateOnHover?: boolean;
    /** Custom character set for scramble effect. Defaults to uppercase alphabet */
    characterSet?: CharacterSet;
}
declare function HyperText({ children, className, duration, delay, as: Component, startOnView, animateOnHover, characterSet, ...props }: HyperTextProps): React$1.JSX.Element;

interface MagicCardBaseProps {
    children?: React$1.ReactNode;
    className?: string;
    gradientSize?: number;
    gradientFrom?: string;
    gradientTo?: string;
}
interface MagicCardGradientProps extends MagicCardBaseProps {
    mode?: "gradient";
    gradientColor?: string;
    gradientOpacity?: number;
    glowFrom?: never;
    glowTo?: never;
    glowAngle?: never;
    glowSize?: never;
    glowBlur?: never;
    glowOpacity?: never;
}
interface MagicCardOrbProps extends MagicCardBaseProps {
    mode: "orb";
    glowFrom?: string;
    glowTo?: string;
    glowAngle?: number;
    glowSize?: number;
    glowBlur?: number;
    glowOpacity?: number;
    gradientColor?: never;
    gradientOpacity?: never;
}
type MagicCardProps = MagicCardGradientProps | MagicCardOrbProps;
declare function MagicCard(props: MagicCardProps): React$1.JSX.Element;

declare function Marquee({ className, reverse, pauseOnHover, children, vertical, repeat, ...props }: React$1.ComponentProps<"div"> & {
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
}): React$1.JSX.Element;

interface MeteorsProps {
    number?: number;
    minDelay?: number;
    maxDelay?: number;
    minDuration?: number;
    maxDuration?: number;
    angle?: number;
    className?: string;
}
declare const Meteors: ({ number, minDelay, maxDelay, minDuration, maxDuration, angle, className, }: MeteorsProps) => React$1.JSX.Element;

declare function NumberTicker({ value, startValue, direction, delay, className, decimalPlaces, ...props }: React$1.ComponentProps<"span"> & {
    value: number;
    startValue?: number;
    direction?: "up" | "down";
    delay?: number;
    decimalPlaces?: number;
}): React$1.JSX.Element;

interface OrbitingCirclesProps extends React$1.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React$1.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
    iconSize?: number;
    speed?: number;
}
declare function OrbitingCircles({ className, children, reverse, duration, radius, path, iconSize, speed, ...props }: OrbitingCirclesProps): React$1.JSX.Element;

interface ProgressiveBlurProps {
    className?: string;
    height?: string;
    position?: "top" | "bottom" | "both";
    blurLevels?: number[];
    children?: React$1.ReactNode;
}
declare function ProgressiveBlur({ className, height, position, blurLevels, }: ProgressiveBlurProps): React$1.JSX.Element;

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}
declare const Ripple: React$1.MemoExoticComponent<({ mainCircleSize, mainCircleOpacity, numCircles, className, ...props }: RippleProps) => React$1.JSX.Element>;

interface ScrollProgressProps extends Omit<React$1.HTMLAttributes<HTMLElement>, keyof MotionProps$1> {
    ref?: React$1.Ref<HTMLDivElement>;
}
declare function ScrollProgress({ className, ref, ...props }: ScrollProgressProps): React$1.JSX.Element;

declare function ShimmerButton({ shimmerColor, shimmerSize, shimmerDuration, borderRadius, background, className, children, ...props }: React$1.ComponentProps<"button"> & {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
}): React$1.JSX.Element;

declare const motionElements: {
    readonly article: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"article">>;
    readonly div: framer_motion.ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
    readonly h1: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h1">>;
    readonly h2: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h2">>;
    readonly h3: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h3">>;
    readonly h4: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h4">>;
    readonly h5: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h5">>;
    readonly h6: framer_motion.ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h6">>;
    readonly li: framer_motion.ForwardRefComponent<HTMLLIElement, HTMLMotionProps<"li">>;
    readonly p: framer_motion.ForwardRefComponent<HTMLParagraphElement, HTMLMotionProps<"p">>;
    readonly section: framer_motion.ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">>;
    readonly span: framer_motion.ForwardRefComponent<HTMLSpanElement, HTMLMotionProps<"span">>;
};
type MotionElementType = Extract<keyof DOMMotionComponents, keyof typeof motionElements>;
interface TypingAnimationProps extends Omit<MotionProps$1, "children"> {
    children?: string;
    words?: string[];
    className?: string;
    duration?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    delay?: number;
    pauseDelay?: number;
    loop?: boolean;
    as?: MotionElementType;
    startOnView?: boolean;
    showCursor?: boolean;
    blinkCursor?: boolean;
    cursorStyle?: "line" | "block" | "underscore";
}
declare function TypingAnimation({ children, words, className, duration, typeSpeed, deleteSpeed, delay, pauseDelay, loop, as: Component, startOnView, showCursor, blinkCursor, cursorStyle, ...props }: TypingAnimationProps): React$1.JSX.Element;

interface WordRotateProps {
    words: string[];
    duration?: number;
    motionProps?: MotionProps$1;
    className?: string;
}
declare function WordRotate({ words, duration, motionProps, className, }: WordRotateProps): React$1.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertAction, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AnimatedBeam, AnimatedCircularProgressBar, AnimatedGridPattern, type AnimatedGridPatternProps, AnimatedList, AnimatedListItem, type AnimatedListProps, AnimatedShinyText, type AnimatedShinyTextProps, AuroraText, Avatar$1 as Avatar, AvatarBadge, AvatarCircles, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, BentoCard, BentoGrid, BlobContext, BlurFade, BorderBeam, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BrowserMockup, type BrowserMockupProps, Button, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, ChoiceGroup, type ChoiceGroupItemProps, type ChoiceGroupProps, CodeBlock, Collapsible, CollapsibleContent, CollapsibleTrigger, ColorPicker, type ColorPickerProps, Combobox, ComboboxClear, ComboboxContent, ComboboxItem, type ComboboxOption, type ComboboxProps, ComboboxTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, CompareSlider, type CompareSliderProps, Confetti, ConfettiButton, type ConfettiRef, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, type ContributionDataPoint, ContributionGraph, type ContributionGraphProps, DatePickerField, type DatePickerFieldProps, DateRangePickerField, type DateRangePickerFieldProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DirectionAwareTabs, Dock, DockIcon, type DockIconProps, type DockProps, DotPattern, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Dropzone, type DropzoneRejection, DynamicContainer, DynamicDescription, DynamicDiv, DynamicIsland, DynamicIslandProvider, DynamicIslandSizePresets, DynamicTitle, Editor, type EditorProps, EditorToolbar, EmptyState, FeatureCarousel, type FeatureCarouselItemProps, type FeatureCarouselProps, Flag, type FlagProps, GridPattern, HoverCard, HoverCardContent, HoverCardTrigger, HyperText, IPhoneMockup, type IPhoneMockupProps, ImageZoom, type ImageZoomProps, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type Item, Kbd, KbdGroup, Label, MagicCard, Marquee, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, Meteors, Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput, NumberTicker, Onboarding, type OnboardingContextValue, type OnboardingHeaderProps, type OnboardingNavigationProps, type OnboardingRootProps, type OnboardingStepIndicatorProps, type OnboardingStepProps, OrbitingCircles, type OrbitingCirclesProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PasswordStrengthInput, type PasswordStrengthInputProps, type PasswordStrengthRequirement, Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger, Progress, ProgressiveBlur, type ProgressiveBlurProps, QRCode, type ErrorCorrectionLevel as QRCodeErrorCorrectionLevel, type QRCodeProps, RadioGroup, RadioGroupItem, RatingInput, type RatingInputProps, type RatingItem, RelativeTime, Ripple, SIZE_PRESETS, ScrollArea, ScrollBar, ScrollProgress, SegmentedControl, SegmentedControlItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, ShimmerButton, type SizePresets, Skeleton, Slider, Snippet, SortableList, SortableListItem, Spinner, StepIndicator, type StepIndicatorProps, Stepper, type StepperProps, StickyBanner, type StickyBannerProps, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Terminal, type TerminalProps, Textarea, Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle, Timer, TimerDisplay, type TimerDisplayProps, TimerIcon, type TimerIconProps, type TimerProps, TimerRoot, type TimerRootProps, TipsList, type TipsListItemProps, type TipsListProps, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Toolbar, ToolbarButton, ToolbarGroup, ToolbarLink, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Tree, TreeNode, type TreeNodeData, TypingAnimation, type UseTimerOptions, type UseTimerReturn, WordRotate, badgeVariants, buttonVariants, cn, damping, formatBytes, navigationMenuTriggerStyle, spinnerVariants, stiffness, tabsListVariants, toggleVariants, useDynamicIslandSize, useOnboarding, useScheduledAnimations, useTimer };
