import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Toolbar as Toolbar$1 } from 'radix-ui';
import { buttonVariants } from './button.js';
import { toggleVariants } from './toggle.js';
import 'class-variance-authority/types';

declare function Toolbar({ className, orientation, ...props }: React.ComponentProps<typeof Toolbar$1.Root>): React.JSX.Element;
declare function ToolbarGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function ToolbarButton({ className, variant, size, ...props }: React.ComponentProps<typeof Toolbar$1.Button> & Pick<VariantProps<typeof buttonVariants>, "variant" | "size">): React.JSX.Element;
declare function ToolbarSeparator({ className, ...props }: React.ComponentProps<typeof Toolbar$1.Separator>): React.JSX.Element;
declare function ToolbarLink({ className, ...props }: React.ComponentProps<typeof Toolbar$1.Link>): React.JSX.Element;
declare function ToolbarToggleGroup({ className, ...props }: React.ComponentProps<typeof Toolbar$1.ToggleGroup>): React.JSX.Element;
declare function ToolbarToggleItem({ className, variant, size, ...props }: React.ComponentProps<typeof Toolbar$1.ToggleItem> & Pick<VariantProps<typeof toggleVariants>, "variant" | "size">): React.JSX.Element;

export { Toolbar, ToolbarButton, ToolbarGroup, ToolbarLink, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem };
