import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { VariantProps } from 'class-variance-authority';
import { Avatar as Avatar$1, Checkbox as Checkbox$1, Dialog as Dialog$1, DropdownMenu as DropdownMenu$1, Label as Label$1, RadioGroup as RadioGroup$1, Select as Select$1, Separator as Separator$1, Switch as Switch$1, Tabs as Tabs$1, Tooltip as Tooltip$1 } from 'radix-ui';

declare function cn(...inputs: ClassValue[]): string;

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React$1.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Avatar({ className, size, ...props }: React$1.ComponentProps<typeof Avatar$1.Root> & {
    size?: "default" | "sm" | "lg";
}): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Fallback>): React$1.JSX.Element;
declare function AvatarBadge({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function AvatarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
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

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof Checkbox$1.Root>): React$1.JSX.Element;

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

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Root>): React$1.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroup$1.Item>): React$1.JSX.Element;

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

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare function Switch({ className, size, ...props }: React$1.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;

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

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;

export { Alert, AlertAction, AlertDescription, AlertTitle, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, Label, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Skeleton, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, tabsListVariants };
