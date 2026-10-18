import * as React from 'react';
import { Avatar as Avatar$1 } from 'radix-ui';

declare function Avatar({ className, size, ...props }: React.ComponentProps<typeof Avatar$1.Root> & {
    size?: "default" | "sm" | "lg";
}): React.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof Avatar$1.Image>): React.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof Avatar$1.Fallback>): React.JSX.Element;
declare function AvatarBadge({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function AvatarGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
