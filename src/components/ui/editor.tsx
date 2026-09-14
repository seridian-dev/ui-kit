// Clean-room implementation for @seridian/ui-kit.
// Rich-text editor built directly on Tiptap (https://tiptap.dev, MIT) — the same
// engine EditorCN uses — wired to this kit's own Toggle/Select/Popover/Separator
// primitives for the toolbar. No third-party editor component source was viewed
// or copied; the toolbar and styling are original to this kit.

"use client"

import * as React from "react"

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
  Undo2,
} from "lucide-react"

import {
  EditorContent,
  useEditor,
  useEditorState,
  type Editor as TiptapEditor,
  type UseEditorOptions,
} from "@tiptap/react"
import { Placeholder } from "@tiptap/extension-placeholder"
import { StarterKit } from "@tiptap/starter-kit"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface EditorProps {
  /** Initial HTML content. */
  content?: string
  /** Called with the editor's HTML on every document update. */
  onValueChange?: (html: string) => void
  /** Called once the underlying Tiptap editor instance is created. */
  onEditorReady?: (editor: TiptapEditor) => void
  /** @default true */
  editable?: boolean
  /** @default "Write something …" */
  placeholder?: string
  /** @default true */
  toolbar?: boolean
  className?: string
  /** Passed through to the underlying Tiptap editor. */
  editorProps?: UseEditorOptions["editorProps"]
}

const headingLevels = [1, 2, 3] as const

type HeadingValue = "paragraph" | "h1" | "h2" | "h3"

function ToolbarToggle({
  label,
  pressed,
  disabled,
  onPressedChange,
  children,
}: {
  label: string
  pressed: boolean
  disabled?: boolean
  onPressedChange: () => void
  children: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          size="sm"
          aria-label={label}
          pressed={pressed}
          disabled={disabled}
          onPressedChange={onPressedChange}
        >
          {children}
        </Toggle>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  )
}

function LinkToolbarItem({
  editor,
  active,
}: {
  editor: TiptapEditor
  active: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const [url, setUrl] = React.useState("")

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (nextOpen) {
      const href = editor.getAttributes("link").href
      setUrl(typeof href === "string" ? href : "")
    }
  }

  const applyLink = () => {
    const value = url.trim()
    if (value) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: value }).run()
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
    }
    setOpen(false)
  }

  const removeLink = () => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run()
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Toggle size="sm" aria-label="Link" pressed={active || open}>
              <Link2 />
            </Toggle>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">Link</TooltipContent>
      </Tooltip>
      <PopoverContent align="start" className="flex-row items-center gap-2">
        <Input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              applyLink()
            }
          }}
          placeholder="https://example.com"
          className="flex-1"
        />
        <Button size="sm" onClick={applyLink}>
          Set
        </Button>
        <Button size="sm" variant="outline" onClick={removeLink}>
          Remove
        </Button>
      </PopoverContent>
    </Popover>
  )
}

function EditorToolbar({ editor }: { editor: TiptapEditor | null }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: instance }) =>
      instance
        ? {
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
            canRedo: instance.can().redo(),
          }
        : null,
  })

  if (!editor || !state) return null

  const headingValue: HeadingValue = state.h1
    ? "h1"
    : state.h2
      ? "h2"
      : state.h3
        ? "h3"
        : "paragraph"

  const applyHeading = (value: string) => {
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run()
      return
    }
    const level = Number.parseInt(value.slice(1), 10) as 1 | 2 | 3
    editor.chain().focus().setHeading({ level }).run()
  }

  return (
    <div
      data-slot="editor-toolbar"
      className="sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b bg-muted/50 p-1"
    >
      <ToolbarToggle
        label="Bold"
        pressed={state.bold}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold />
      </ToolbarToggle>
      <ToolbarToggle
        label="Italic"
        pressed={state.italic}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic />
      </ToolbarToggle>
      <ToolbarToggle
        label="Strikethrough"
        pressed={state.strike}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough />
      </ToolbarToggle>
      <ToolbarToggle
        label="Code"
        pressed={state.code}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
      >
        <Code />
      </ToolbarToggle>

      <Separator orientation="vertical" className="mx-1 h-6 data-vertical:self-auto" />

      <Select value={headingValue} onValueChange={applyHeading}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SelectTrigger size="sm" className="w-28" aria-label="Text style">
              <SelectValue />
            </SelectTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Text style</TooltipContent>
        </Tooltip>
        <SelectContent position="popper" align="start">
          <SelectItem value="paragraph">Paragraph</SelectItem>
          {headingLevels.map((level) => (
            <SelectItem key={level} value={`h${level}`}>
              Heading {level}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="mx-1 h-6 data-vertical:self-auto" />

      <ToolbarToggle
        label="Bullet list"
        pressed={state.bulletList}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List />
      </ToolbarToggle>
      <ToolbarToggle
        label="Ordered list"
        pressed={state.orderedList}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered />
      </ToolbarToggle>
      <ToolbarToggle
        label="Blockquote"
        pressed={state.blockquote}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TextQuote />
      </ToolbarToggle>

      <Separator orientation="vertical" className="mx-1 h-6 data-vertical:self-auto" />

      <LinkToolbarItem editor={editor} active={state.link} />

      <Separator orientation="vertical" className="mx-1 h-6 data-vertical:self-auto" />

      <ToolbarToggle
        label="Undo"
        pressed={false}
        disabled={!state.canUndo}
        onPressedChange={() => editor.chain().focus().undo().run()}
      >
        <Undo2 />
      </ToolbarToggle>
      <ToolbarToggle
        label="Redo"
        pressed={false}
        disabled={!state.canRedo}
        onPressedChange={() => editor.chain().focus().redo().run()}
      >
        <Redo2 />
      </ToolbarToggle>
    </div>
  )
}

function Editor({
  content,
  onValueChange,
  onEditorReady,
  editable = true,
  placeholder = "Write something …",
  toolbar = true,
  className,
  editorProps,
}: EditorProps) {
  const onValueChangeRef = React.useRef(onValueChange)
  onValueChangeRef.current = onValueChange
  const onEditorReadyRef = React.useRef(onEditorReady)
  onEditorReadyRef.current = onEditorReady

  const editor = useEditor({
    immediatelyRender: false,
    editable,
    content,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: { openOnClick: false, autolink: true },
      }),
      Placeholder.configure({ placeholder }),
    ],
    editorProps,
    onCreate: ({ editor: instance }) => onEditorReadyRef.current?.(instance),
    onUpdate: ({ editor: instance }) => onValueChangeRef.current?.(instance.getHTML()),
  })

  React.useEffect(() => {
    if (editor && editor.isEditable !== editable) {
      editor.setEditable(editable)
    }
  }, [editor, editable])

  return (
    <TooltipProvider>
      <div
        data-slot="editor"
        className={cn(
          "rounded-md border border-input bg-background transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
          className
        )}
      >
        {toolbar && <EditorToolbar editor={editor} />}
        <EditorContent
          editor={editor}
          className="[&_.tiptap]:min-h-24 [&_.tiptap]:p-3 [&_.tiptap]:outline-none [&_.tiptap_p]:my-1 [&_.tiptap_p:first-child]:mt-0 [&_.tiptap_p:last-child]:mb-0 [&_.tiptap_h1]:mt-3 [&_.tiptap_h1]:mb-1.5 [&_.tiptap_h1]:text-xl [&_.tiptap_h1]:font-bold [&_.tiptap_h2]:mt-3 [&_.tiptap_h2]:mb-1.5 [&_.tiptap_h2]:text-lg [&_.tiptap_h2]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1.5 [&_.tiptap_h3]:text-base [&_.tiptap_h3]:font-semibold [&_.tiptap_h1:first-child]:mt-0 [&_.tiptap_h2:first-child]:mt-0 [&_.tiptap_h3:first-child]:mt-0 [&_.tiptap_ul]:my-1.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ol]:my-1.5 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_li]:my-0.5 [&_.tiptap_li>p]:my-0 [&_.tiptap_blockquote]:my-2 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-border [&_.tiptap_blockquote]:pl-3 [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_pre]:my-2 [&_.tiptap_pre]:overflow-x-auto [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:p-3 [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:text-sm [&_.tiptap_code]:rounded-sm [&_.tiptap_code]:bg-muted [&_.tiptap_code]:px-1 [&_.tiptap_code]:py-0.5 [&_.tiptap_code]:font-mono [&_.tiptap_code]:text-[0.85em] [&_.tiptap_pre_code]:bg-transparent [&_.tiptap_pre_code]:p-0 [&_.tiptap_hr]:my-3 [&_.tiptap_hr]:border-border [&_.tiptap_a]:font-medium [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-2 [&_.tiptap_.is-empty:first-child]:before:pointer-events-none [&_.tiptap_.is-empty:first-child]:before:float-left [&_.tiptap_.is-empty:first-child]:before:h-0 [&_.tiptap_.is-empty:first-child]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty:first-child]:before:text-muted-foreground"
        />
      </div>
    </TooltipProvider>
  )
}

export { Editor, EditorToolbar, useEditorState }
