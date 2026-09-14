// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Dropzone (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Built on this kit's primitives; zero additional dependencies.
"use client"

import * as React from "react"
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B"
  const units = ["B", "KB", "MB", "GB", "TB"] as const
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  )
  const unit = units[exponent] ?? "B"
  const value = bytes / 1024 ** exponent
  return `${value.toFixed(exponent === 0 ? 0 : decimals)} ${unit}`
}

function matchesAccept(file: File, accept: string): boolean {
  const patterns = accept
    .split(",")
    .map((pattern) => pattern.trim().toLowerCase())
    .filter((pattern) => pattern.length > 0)
  if (patterns.length === 0) return true
  const name = file.name.toLowerCase()
  const type = file.type.toLowerCase()
  return patterns.some((pattern) => {
    if (pattern.startsWith(".")) return name.endsWith(pattern)
    if (pattern.endsWith("/*")) return type.startsWith(pattern.slice(0, -1))
    return type === pattern
  })
}

type DropzoneFileItem = {
  id: string
  file: File
  previewUrl: string | null
}

type DropzoneRejection = {
  id: string
  name: string
  reason: string
}

function Dropzone({
  accept,
  maxSize,
  maxFiles,
  multiple = true,
  disabled = false,
  hint,
  onFilesAdded,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  accept?: string
  maxSize?: number
  maxFiles?: number
  multiple?: boolean
  disabled?: boolean
  hint?: string
  onFilesAdded?: (files: File[]) => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dragDepth = React.useRef(0)
  const itemsRef = React.useRef<DropzoneFileItem[]>([])

  const [items, setItems] = React.useState<DropzoneFileItem[]>([])
  const [rejections, setRejections] = React.useState<DropzoneRejection[]>([])
  const [isDragging, setIsDragging] = React.useState(false)

  itemsRef.current = items

  React.useEffect(() => {
    return () => {
      for (const item of itemsRef.current) {
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl)
      }
    }
  }, [])

  const addFiles = React.useCallback(
    (fileList: FileList | File[]) => {
      if (disabled) return
      const incoming = Array.from(fileList)
      if (incoming.length === 0) return

      const accepted: File[] = []
      const rejected: DropzoneRejection[] = []

      for (const file of incoming) {
        if (accept !== undefined && !matchesAccept(file, accept)) {
          rejected.push({
            id: crypto.randomUUID(),
            name: file.name,
            reason: "File type not accepted",
          })
        } else if (maxSize !== undefined && file.size > maxSize) {
          rejected.push({
            id: crypto.randomUUID(),
            name: file.name,
            reason: `Exceeds ${formatBytes(maxSize)} limit`,
          })
        } else {
          accepted.push(file)
        }
      }

      const capacity =
        maxFiles !== undefined
          ? Math.max(0, maxFiles - itemsRef.current.length)
          : Number.POSITIVE_INFINITY
      const taken = accepted.slice(0, capacity)
      const overflow = accepted.slice(capacity)
      for (const file of overflow) {
        rejected.push({
          id: crypto.randomUUID(),
          name: file.name,
          reason: `Maximum of ${maxFiles} file${maxFiles === 1 ? "" : "s"} exceeded`,
        })
      }

      const nextItems: DropzoneFileItem[] = taken.map((file) => ({
        id: crypto.randomUUID(),
        file,
        previewUrl: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : null,
      }))

      setItems((prev) => {
        itemsRef.current = [...prev, ...nextItems]
        return [...prev, ...nextItems]
      })
      setRejections(rejected)
      if (taken.length > 0) onFilesAdded?.(taken)
    },
    [accept, maxSize, maxFiles, disabled, onFilesAdded]
  )

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id)
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl)
      itemsRef.current = prev.filter((item) => item.id !== id)
      return prev.filter((item) => item.id !== id)
    })
  }, [])

  return (
    <div
      data-slot="dropzone"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        aria-label="Upload files"
        data-slot="dropzone-area"
        data-dragging={isDragging || undefined}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (disabled) return
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            inputRef.current?.click()
          }
        }}
        onDragEnter={(event) => {
          event.preventDefault()
          dragDepth.current += 1
          setIsDragging(true)
        }}
        onDragLeave={(event) => {
          event.preventDefault()
          dragDepth.current -= 1
          if (dragDepth.current <= 0) {
            dragDepth.current = 0
            setIsDragging(false)
          }
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault()
          dragDepth.current = 0
          setIsDragging(false)
          addFiles(event.dataTransfer.files)
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          disabled
            ? "pointer-events-none opacity-50"
            : "cursor-pointer hover:bg-muted/50 data-dragging:border-primary data-dragging:bg-accent/50"
        )}
      >
        <UploadCloudIcon
          aria-hidden="true"
          className="size-8 text-muted-foreground"
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium">
            Drag &amp; drop files here, or click to browse
          </p>
          <p data-slot="dropzone-hint" className="text-xs text-muted-foreground">
            {hint ??
              `Up to ${maxFiles ?? "unlimited"} files${maxSize !== undefined ? ` · max ${formatBytes(maxSize)} each` : ""}`}
          </p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        onChange={(event) => {
          if (event.target.files) addFiles(event.target.files)
          event.target.value = ""
        }}
      />
      {rejections.length > 0 && (
        <ul data-slot="dropzone-rejections" className="flex flex-col gap-1">
          {rejections.map((rejection) => (
            <li
              key={rejection.id}
              className="text-xs text-destructive"
              data-slot="dropzone-rejection"
            >
              <span className="font-medium">{rejection.name}</span>{" "}
              <span>— {rejection.reason}</span>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <ul data-slot="dropzone-files" className="flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item.id}
              data-slot="dropzone-file"
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-2"
            >
              {item.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.previewUrl}
                  alt=""
                  aria-hidden="true"
                  className="size-10 shrink-0 rounded-md border border-border object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground"
                >
                  <FileIcon className="size-5" />
                </span>
              )}
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm">{item.file.name}</span>
                <span className="text-xs text-muted-foreground">
                  {formatBytes(item.file.size)}
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label={`Remove ${item.file.name}`}
                onClick={() => removeItem(item.id)}
              >
                <XIcon />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Dropzone, formatBytes }
export type { DropzoneRejection }
