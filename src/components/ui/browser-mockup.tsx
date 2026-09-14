// Adapted from Velora UI's Browser Mockup (MIT,
// github.com/ColorlibHQ/velora-ui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/ColorlibHQ/velora-ui/main/src/components/velora/browser-mockup.tsx
// (fetched directly, not reconstructed). Behavior/props are unchanged;
// adapted to this kit's conventions.
//
// Deviations from upstream:
// - The macOS traffic lights (`bg-red-500/70`, `bg-yellow-500/70`,
//   `bg-green-500/70`) are kept hardcoded — they depict real browser-chrome
//   controls, so they are intrinsic to the mockup effect. Everything else
//   already used this kit's semantic tokens (`bg-card`, `border-border`,
//   `bg-muted`, `text-muted-foreground`).
// - Added `import * as React from "react"` (upstream referenced
//   `React.HTMLAttributes`/`React.ReactNode` via the UMD global without
//   importing React, which does not typecheck under this kit's tsconfig).
// - `data-slot` added to the toolbar and URL pill (upstream only marked the
//   root).
import * as React from "react"

import { cn } from "@/lib/utils"

interface BrowserMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  children: React.ReactNode
}

/**
 * Browser window frame — traffic lights, URL bar, your content inside.
 */
function BrowserMockup({
  url = "velora.dev",
  className,
  children,
  ...props
}: BrowserMockupProps) {
  return (
    <div
      data-slot="browser-mockup"
      className={cn(
        "overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur",
        className
      )}
      {...props}
    >
      <div
        data-slot="browser-mockup-toolbar"
        className="flex items-center gap-3 border-b border-border/60 px-4 py-3"
      >
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-yellow-500/70" />
          <span className="size-3 rounded-full bg-green-500/70" />
        </div>
        <div
          data-slot="browser-mockup-url"
          className="mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-muted/60 text-xs text-muted-foreground"
        >
          {url}
        </div>
        <div className="w-14" />
      </div>
      {children}
    </div>
  )
}

export { BrowserMockup }

export type { BrowserMockupProps }
