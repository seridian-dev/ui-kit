import * as React from 'react';

declare function EmptyState({ className, title, description, icon, actions, ...props }: React.ComponentProps<"div"> & {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
}): React.JSX.Element;

export { EmptyState };
