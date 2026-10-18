import * as React from 'react';

declare function Snippet({ code, children, label, showPrompt, className, ...props }: React.ComponentProps<"figure"> & {
    code?: string | string[];
    label?: string;
    showPrompt?: boolean;
}): React.JSX.Element;

export { Snippet };
