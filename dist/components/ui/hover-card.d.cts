import * as React from 'react';
import { HoverCard as HoverCard$1 } from 'radix-ui';

declare function HoverCard({ ...props }: React.ComponentProps<typeof HoverCard$1.Root>): React.JSX.Element;
declare function HoverCardTrigger({ ...props }: React.ComponentProps<typeof HoverCard$1.Trigger>): React.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof HoverCard$1.Content>): React.JSX.Element;

export { HoverCard, HoverCardContent, HoverCardTrigger };
