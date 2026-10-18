import * as React from 'react';
import { Menubar as Menubar$1 } from 'radix-ui';

declare function Menubar({ className, ...props }: React.ComponentProps<typeof Menubar$1.Root>): React.JSX.Element;
declare function MenubarMenu({ ...props }: React.ComponentProps<typeof Menubar$1.Menu>): React.JSX.Element;
declare function MenubarGroup({ ...props }: React.ComponentProps<typeof Menubar$1.Group>): React.JSX.Element;
declare function MenubarPortal({ ...props }: React.ComponentProps<typeof Menubar$1.Portal>): React.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof Menubar$1.RadioGroup>): React.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof Menubar$1.Trigger>): React.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React.ComponentProps<typeof Menubar$1.Content>): React.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React.ComponentProps<typeof Menubar$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, inset, ...props }: React.ComponentProps<typeof Menubar$1.CheckboxItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function MenubarRadioItem({ className, children, inset, ...props }: React.ComponentProps<typeof Menubar$1.RadioItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React.ComponentProps<typeof Menubar$1.Label> & {
    inset?: boolean;
}): React.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof Menubar$1.Separator>): React.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function MenubarSub({ ...props }: React.ComponentProps<typeof Menubar$1.Sub>): React.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof Menubar$1.SubTrigger> & {
    inset?: boolean;
}): React.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof Menubar$1.SubContent>): React.JSX.Element;

export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger };
