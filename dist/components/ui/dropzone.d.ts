import * as React from 'react';

declare function formatBytes(bytes: number, decimals?: number): string;
type DropzoneRejection = {
    id: string;
    name: string;
    reason: string;
};
declare function Dropzone({ accept, maxSize, maxFiles, multiple, disabled, hint, onFilesAdded, className, ...props }: React.ComponentProps<"div"> & {
    accept?: string;
    maxSize?: number;
    maxFiles?: number;
    multiple?: boolean;
    disabled?: boolean;
    hint?: string;
    onFilesAdded?: (files: File[]) => void;
}): React.JSX.Element;

export { Dropzone, type DropzoneRejection, formatBytes };
