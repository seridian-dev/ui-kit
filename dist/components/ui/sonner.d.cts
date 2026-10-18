import * as React from 'react';
import { ToasterProps } from 'sonner';

declare const Toaster: ({ theme, ...props }: ToasterProps) => React.JSX.Element;

export { Toaster };
