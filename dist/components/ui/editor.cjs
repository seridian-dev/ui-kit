"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  Editor: () => Editor,
  EditorToolbar: () => EditorToolbar,
  useEditorState: () => import_react.useEditorState
});
module.exports = __toCommonJS(editor_exports);
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_react = require("@tiptap/react");
var import_extension_placeholder = require("@tiptap/extension-placeholder");
var import_starter_kit = require("@tiptap/starter-kit");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_input = require("./input.cjs");
var import_popover = require("./popover.cjs");
var import_select = require("./select.cjs");
var import_separator = require("./separator.cjs");
var import_toggle = require("./toggle.cjs");
var import_tooltip = require("./tooltip.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var headingLevels = [1, 2, 3];
function ToolbarToggle({
  label,
  pressed,
  disabled,
  onPressedChange,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tooltip.Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_toggle.Toggle,
      {
        size: "sm",
        "aria-label": label,
        pressed,
        disabled,
        onPressedChange,
        children
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipContent, { side: "bottom", children: label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tooltip.Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_toggle.Toggle, { size: "sm", "aria-label": "Link", pressed: active || open, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Link2, {}) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipContent, { side: "bottom", children: "Link" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_popover.PopoverContent, { align: "start", className: "flex-row items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_input.Input,
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { size: "sm", onClick: applyLink, children: "Set" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { size: "sm", variant: "outline", onClick: removeLink, children: "Remove" })
    ] })
  ] });
}
function EditorToolbar({ editor }) {
  const state = (0, import_react.useEditorState)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "editor-toolbar",
      className: "sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b bg-muted/50 p-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Bold",
            pressed: state.bold,
            onPressedChange: () => editor.chain().focus().toggleBold().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Bold, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Italic",
            pressed: state.italic,
            onPressedChange: () => editor.chain().focus().toggleItalic().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Italic, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Strikethrough",
            pressed: state.strike,
            onPressedChange: () => editor.chain().focus().toggleStrike().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Strikethrough, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Code",
            pressed: state.code,
            onPressedChange: () => editor.chain().focus().toggleCode().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Code, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_select.Select, { value: headingValue, onValueChange: applyHeading, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tooltip.Tooltip, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectTrigger, { size: "sm", className: "w-28", "aria-label": "Text style", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectValue, {}) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipContent, { side: "bottom", children: "Text style" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_select.SelectContent, { position: "popper", align: "start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectItem, { value: "paragraph", children: "Paragraph" }),
            headingLevels.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_select.SelectItem, { value: `h${level}`, children: [
              "Heading ",
              level
            ] }, level))
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Bullet list",
            pressed: state.bulletList,
            onPressedChange: () => editor.chain().focus().toggleBulletList().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.List, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Ordered list",
            pressed: state.orderedList,
            onPressedChange: () => editor.chain().focus().toggleOrderedList().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ListOrdered, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Blockquote",
            pressed: state.blockquote,
            onPressedChange: () => editor.chain().focus().toggleBlockquote().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.TextQuote, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkToolbarItem, { editor, active: state.link }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Undo",
            pressed: false,
            disabled: !state.canUndo,
            onPressedChange: () => editor.chain().focus().undo().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Undo2, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarToggle,
          {
            label: "Redo",
            pressed: false,
            disabled: !state.canRedo,
            onPressedChange: () => editor.chain().focus().redo().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Redo2, {})
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
  const editor = (0, import_react.useEditor)({
    immediatelyRender: false,
    editable,
    content,
    extensions: [
      import_starter_kit.StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: { openOnClick: false, autolink: true }
      }),
      import_extension_placeholder.Placeholder.configure({ placeholder })
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "editor",
      className: (0, import_utils.cn)(
        "rounded-md border border-input bg-background transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        className
      ),
      children: [
        toolbar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorToolbar, { editor }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react.EditorContent,
          {
            editor,
            className: "[&_.tiptap]:min-h-24 [&_.tiptap]:p-3 [&_.tiptap]:outline-none [&_.tiptap_p]:my-1 [&_.tiptap_p:first-child]:mt-0 [&_.tiptap_p:last-child]:mb-0 [&_.tiptap_h1]:mt-3 [&_.tiptap_h1]:mb-1.5 [&_.tiptap_h1]:text-xl [&_.tiptap_h1]:font-bold [&_.tiptap_h2]:mt-3 [&_.tiptap_h2]:mb-1.5 [&_.tiptap_h2]:text-lg [&_.tiptap_h2]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1.5 [&_.tiptap_h3]:text-base [&_.tiptap_h3]:font-semibold [&_.tiptap_h1:first-child]:mt-0 [&_.tiptap_h2:first-child]:mt-0 [&_.tiptap_h3:first-child]:mt-0 [&_.tiptap_ul]:my-1.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ol]:my-1.5 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_li]:my-0.5 [&_.tiptap_li>p]:my-0 [&_.tiptap_blockquote]:my-2 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-border [&_.tiptap_blockquote]:pl-3 [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_pre]:my-2 [&_.tiptap_pre]:overflow-x-auto [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:p-3 [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:text-sm [&_.tiptap_code]:rounded-sm [&_.tiptap_code]:bg-muted [&_.tiptap_code]:px-1 [&_.tiptap_code]:py-0.5 [&_.tiptap_code]:font-mono [&_.tiptap_code]:text-[0.85em] [&_.tiptap_pre_code]:bg-transparent [&_.tiptap_pre_code]:p-0 [&_.tiptap_hr]:my-3 [&_.tiptap_hr]:border-border [&_.tiptap_a]:font-medium [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-2 [&_.tiptap_.is-empty:first-child]:before:pointer-events-none [&_.tiptap_.is-empty:first-child]:before:float-left [&_.tiptap_.is-empty:first-child]:before:h-0 [&_.tiptap_.is-empty:first-child]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty:first-child]:before:text-muted-foreground"
          }
        )
      ]
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Editor,
  EditorToolbar,
  useEditorState
});
//# sourceMappingURL=editor.cjs.map