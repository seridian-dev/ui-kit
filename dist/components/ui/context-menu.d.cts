import * as React from 'react';
import { ContextMenu as ContextMenu$1 } from 'radix-ui';

declare function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenu$1.Root>): React.JSX.Element;
declare function ContextMenuTrigger({ className, ...props }: React.ComponentProps<typeof ContextMenu$1.Trigger>): React.JSX.Element;
declare function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenu$1.Group>): React.JSX.Element;
declare function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenu$1.Portal>): React.JSX.Element;
declare function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenu$1.Sub>): React.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React.ComponentProps<typeof ContextMenu$1.RadioGroup>): React.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenu$1.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): React.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof ContextMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof ContextMenu$1.SubTrigger> & {
    inset?: boolean;
}): React.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React.ComponentProps<typeof ContextMenu$1.SubContent>): React.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, inset, ...props }: React.ComponentProps<typeof ContextMenu$1.CheckboxItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function ContextMenuRadioItem({ className, children, inset, ...props }: React.ComponentProps<typeof ContextMenu$1.RadioItem> & {
    inset?: boolean;
}): React.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof ContextMenu$1.Label> & {
    inset?: boolean;
}): React.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React.ComponentProps<typeof ContextMenu$1.Separator>): React.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;

export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
