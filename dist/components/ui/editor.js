"use client";

// src/components/ui/editor.tsx
import * as React from "react";
import {
  Bold,
  Code,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  TextQuote,
  Undo2
} from "lucide-react";
import {
  EditorContent,
  useEditor,
  useEditorState
} from "@tiptap/react";
import { Placeholder } from "@tiptap/extension-placeholder";
import { StarterKit } from "@tiptap/starter-kit";
import { cn } from "../../lib/utils.js";
import { Button } from "./button.js";
import { Input } from "./input.js";
import { Popover, PopoverContent, PopoverTrigger } from "./popover.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./select.js";
import { Separator } from "./separator.js";
import { Toggle } from "./toggle.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./tooltip.js";
import { jsx, jsxs } from "react/jsx-runtime";
var headingLevels = [1, 2, 3];
function ToolbarToggle({
  label,
  pressed,
  disabled,
  onPressedChange,
  children
}) {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      Toggle,
      {
        size: "sm",
        "aria-label": label,
        pressed,
        disabled,
        onPressedChange,
        children
      }
    ) }),
    /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: label })
  ] });
}
function LinkToolbarItem({
  editor,
  active
}) {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (nextOpen) {
      const href = editor.getAttributes("link").href;
      setUrl(typeof href === "string" ? href : "");
    }
  };
  const applyLink = () => {
    const value = url.trim();
    if (value) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: value }).run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    setOpen(false);
  };
  const removeLink = () => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Toggle, { size: "sm", "aria-label": "Link", pressed: active || open, children: /* @__PURE__ */ jsx(Link2, {}) }) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: "Link" })
    ] }),
    /* @__PURE__ */ jsxs(PopoverContent, { align: "start", className: "flex-row items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: url,
          onChange: (event) => setUrl(event.target.value),
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              applyLink();
            }
          },
          placeholder: "https://example.com",
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx(Button, { size: "sm", onClick: applyLink, children: "Set" }),
      /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", onClick: removeLink, children: "Remove" })
    ] })
  ] });
}
function EditorToolbar({ editor }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: instance }) => instance ? {
      bold: instance.isActive("bold"),
      italic: instance.isActive("italic"),
      strike: instance.isActive("strike"),
      code: instance.isActive("code"),
      h1: instance.isActive("heading", { level: 1 }),
      h2: instance.isActive("heading", { level: 2 }),
      h3: instance.isActive("heading", { level: 3 }),
      bulletList: instance.isActive("bulletList"),
      orderedList: instance.isActive("orderedList"),
      blockquote: instance.isActive("blockquote"),
      link: instance.isActive("link"),
      canUndo: instance.can().undo(),
      canRedo: instance.can().redo()
    } : null
  });
  if (!editor || !state) return null;
  const headingValue = state.h1 ? "h1" : state.h2 ? "h2" : state.h3 ? "h3" : "paragraph";
  const applyHeading = (value) => {
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run();
      return;
    }
    const level = Number.parseInt(value.slice(1), 10);
    editor.chain().focus().setHeading({ level }).run();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "editor-toolbar",
      className: "sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b bg-muted/50 p-1",
      children: [
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Bold",
            pressed: state.bold,
            onPressedChange: () => editor.chain().focus().toggleBold().run(),
            children: /* @__PURE__ */ jsx(Bold, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Italic",
            pressed: state.italic,
            onPressedChange: () => editor.chain().focus().toggleItalic().run(),
            children: /* @__PURE__ */ jsx(Italic, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Strikethrough",
            pressed: state.strike,
            onPressedChange: () => editor.chain().focus().toggleStrike().run(),
            children: /* @__PURE__ */ jsx(Strikethrough, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Code",
            pressed: state.code,
            onPressedChange: () => editor.chain().focus().toggleCode().run(),
            children: /* @__PURE__ */ jsx(Code, {})
          }
        ),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsxs(Select, { value: headingValue, onValueChange: applyHeading, children: [
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(SelectTrigger, { size: "sm", className: "w-28", "aria-label": "Text style", children: /* @__PURE__ */ jsx(SelectValue, {}) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: "Text style" })
          ] }),
          /* @__PURE__ */ jsxs(SelectContent, { position: "popper", align: "start", children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "paragraph", children: "Paragraph" }),
            headingLevels.map((level) => /* @__PURE__ */ jsxs(SelectItem, { value: `h${level}`, children: [
              "Heading ",
              level
            ] }, level))
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Bullet list",
            pressed: state.bulletList,
            onPressedChange: () => editor.chain().focus().toggleBulletList().run(),
            children: /* @__PURE__ */ jsx(List, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Ordered list",
            pressed: state.orderedList,
            onPressedChange: () => editor.chain().focus().toggleOrderedList().run(),
            children: /* @__PURE__ */ jsx(ListOrdered, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Blockquote",
            pressed: state.blockquote,
            onPressedChange: () => editor.chain().focus().toggleBlockquote().run(),
            children: /* @__PURE__ */ jsx(TextQuote, {})
          }
        ),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx(LinkToolbarItem, { editor, active: state.link }),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Undo",
            pressed: false,
            disabled: !state.canUndo,
            onPressedChange: () => editor.chain().focus().undo().run(),
            children: /* @__PURE__ */ jsx(Undo2, {})
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarToggle,
          {
            label: "Redo",
            pressed: false,
            disabled: !state.canRedo,
            onPressedChange: () => editor.chain().focus().redo().run(),
            children: /* @__PURE__ */ jsx(Redo2, {})
          }
        )
      ]
    }
  );
}
function Editor({
  content,
  onValueChange,
  onEditorReady,
  editable = true,
  placeholder = "Write something \u2026",
  toolbar = true,
  className,
  editorProps
}) {
  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  const onEditorReadyRef = React.useRef(onEditorReady);
  onEditorReadyRef.current = onEditorReady;
  const editor = useEditor({
    immediatelyRender: false,
    editable,
    content,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: { openOnClick: false, autolink: true }
      }),
      Placeholder.configure({ placeholder })
    ],
    editorProps,
    onCreate: ({ editor: instance }) => onEditorReadyRef.current?.(instance),
    onUpdate: ({ editor: instance }) => onValueChangeRef.current?.(instance.getHTML())
  });
  React.useEffect(() => {
    if (editor && editor.isEditable !== editable) {
      editor.setEditable(editable);
    }
  }, [editor, editable]);
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "editor",
      className: cn(
        "rounded-md border border-input bg-background transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        className
      ),
      children: [
        toolbar && /* @__PURE__ */ jsx(EditorToolbar, { editor }),
        /* @__PURE__ */ jsx(
          EditorContent,
          {
            editor,
            className: "[&_.tiptap]:min-h-24 [&_.tiptap]:p-3 [&_.tiptap]:outline-none [&_.tiptap_p]:my-1 [&_.tiptap_p:first-child]:mt-0 [&_.tiptap_p:last-child]:mb-0 [&_.tiptap_h1]:mt-3 [&_.tiptap_h1]:mb-1.5 [&_.tiptap_h1]:text-xl [&_.tiptap_h1]:font-bold [&_.tiptap_h2]:mt-3 [&_.tiptap_h2]:mb-1.5 [&_.tiptap_h2]:text-lg [&_.tiptap_h2]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1.5 [&_.tiptap_h3]:text-base [&_.tiptap_h3]:font-semibold [&_.tiptap_h1:first-child]:mt-0 [&_.tiptap_h2:first-child]:mt-0 [&_.tiptap_h3:first-child]:mt-0 [&_.tiptap_ul]:my-1.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ol]:my-1.5 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_li]:my-0.5 [&_.tiptap_li>p]:my-0 [&_.tiptap_blockquote]:my-2 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-border [&_.tiptap_blockquote]:pl-3 [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_pre]:my-2 [&_.tiptap_pre]:overflow-x-auto [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:p-3 [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:text-sm [&_.tiptap_code]:rounded-sm [&_.tiptap_code]:bg-muted [&_.tiptap_code]:px-1 [&_.tiptap_code]:py-0.5 [&_.tiptap_code]:font-mono [&_.tiptap_code]:text-[0.85em] [&_.tiptap_pre_code]:bg-transparent [&_.tiptap_pre_code]:p-0 [&_.tiptap_hr]:my-3 [&_.tiptap_hr]:border-border [&_.tiptap_a]:font-medium [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-2 [&_.tiptap_.is-empty:first-child]:before:pointer-events-none [&_.tiptap_.is-empty:first-child]:before:float-left [&_.tiptap_.is-empty:first-child]:before:h-0 [&_.tiptap_.is-empty:first-child]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty:first-child]:before:text-muted-foreground"
          }
        )
      ]
    }
  ) });
}
export {
  Editor,
  EditorToolbar,
  useEditorState
};
//# sourceMappingURL=editor.js.map