import * as React from 'react';

interface TerminalProps {
    /** Lines to type. Prefix with "$ " to render a prompt-colored command. */
    lines: string[];
    title?: string;
    /** ms per character */
    speed?: number;
    className?: string;
}
/**
 * A terminal window that types its lines when scrolled into view.
 */
declare function Terminal({ lines, title, speed, className, }: TerminalProps): React.JSX.Element;

export { Terminal, type TerminalProps };
