import * as React from 'react';

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
declare function CodeBlock({ tabs, code, language, className, }: CodeBlockProps): React.JSX.Element | null;

export { CodeBlock };
