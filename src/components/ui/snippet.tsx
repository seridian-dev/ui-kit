// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Snippet (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Built on this kit's primitives; zero additional dependencies.
"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const COPY_RESET_DELAY_MS = 2000

function Snippet({
  code,
  children,
  label,
  showPrompt = false,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  code?: string | string[]
  label?: string
  showPrompt?: boolean
}) {
  const lines = React.useMemo(() => {
    if (code == null) return null
    return Array.isArray(code) ? code : [code]
  }, [code])

  const copyText = React.useMemo(() => {
    if (lines) return lines.join("\n")
    return typeof children === "string" ? children : ""
  }, [lines, children])

  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
        timeoutRef.current = null
      }, COPY_RESET_DELAY_MS)
    } catch {
      setCopied(false)
    }
  }, [copyText])

  const showCopy = copyText.length > 0
  const showHeader = showCopy || label != null

  return (
    <figure
      data-slot="snippet"
      className={cn(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-border bg-muted py-3 text-sm",
        className
      )}
      {...props}
    >
      {showHeader && (
        <figcaption
          data-slot="snippet-header"
          className={cn(
            "flex items-center gap-2 px-4",
            label == null && "justify-end"
          )}
        >
          {label != null && (
            <span
              data-slot="snippet-label"
              className="min-w-0 truncate font-mono text-xs text-muted-foreground"
            >
              {label}
            </span>
          )}
          {showCopy && (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
              onClick={() => void handleCopy()}
              className="ml-auto"
            >
              {copied ? (
                <CheckIcon className="text-primary" aria-hidden="true" />
              ) : (
                <CopyIcon aria-hidden="true" />
              )}
            </Button>
          )}
        </figcaption>
      )}
      <pre
        data-slot="snippet-code"
        className="overflow-x-auto px-4 font-mono text-sm leading-relaxed text-foreground"
      >
        <code>
          {lines ? (
            lines.map((line, index) => (
              <span key={index} className="block whitespace-pre">
                {showPrompt && (
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block select-none text-muted-foreground"
                  >
                    $
                  </span>
                )}
                {line.length > 0 ? line : " "}
              </span>
            ))
          ) : (
            children
          )}
        </code>
      </pre>
    </figure>
  )
}

export { Snippet }
