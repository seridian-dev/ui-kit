import * as React from 'react';
import { Switch as Switch$1 } from 'radix-ui';

declare function Switch({ className, size, ...props }: React.ComponentProps<typeof Switch$1.Root> & {
    size?: "sm" | "default";
}): React.JSX.Element;

export { Switch };
