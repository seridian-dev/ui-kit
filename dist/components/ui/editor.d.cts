import * as React from 'react';
import { Editor as Editor$1, UseEditorOptions } from '@tiptap/react';
export { useEditorState } from '@tiptap/react';

interface EditorProps {
    /** Initial HTML content. */
    content?: string;
    /** Called with the editor's HTML on every document update. */
    onValueChange?: (html: string) => void;
    /** Called once the underlying Tiptap editor instance is created. */
    onEditorReady?: (editor: Editor$1) => void;
    /** @default true */
    editable?: boolean;
    /** @default "Write something …" */
    placeholder?: string;
    /** @default true */
    toolbar?: boolean;
    className?: string;
    /** Passed through to the underlying Tiptap editor. */
    editorProps?: UseEditorOptions["editorProps"];
}
declare function EditorToolbar({ editor }: {
    editor: Editor$1 | null;
}): React.JSX.Element | null;
declare function Editor({ content, onValueChange, onEditorReady, editable, placeholder, toolbar, className, editorProps, }: EditorProps): React.JSX.Element;

export { Editor, type EditorProps, EditorToolbar };
