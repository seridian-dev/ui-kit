// Adapted from Velora UI's Sticky Banner (MIT,
// github.com/ColorlibHQ/velora-ui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/ColorlibHQ/velora-ui/main/src/components/velora/sticky-banner.tsx
// (fetched directly, not reconstructed). Behavior/props are unchanged;
// adapted to this kit's conventions.
//
// Deviations from upstream:
// - Velora's `--brand-from` / `--brand-via` / `--brand-to` gradient tokens
//   mapped to this kit's single `--color-primary` token:
//   `from-brand-from via-brand-via to-brand-to` → `from-primary via-primary
//   to-primary/75`, and `text-brand-foreground` → `text-primary-foreground`
//   (this kit has no separate brand-shade tokens, so the far stop fades
//   primary to 75% alpha to keep the directional gradient).
// - `data-slot` added to the content wrapper and dismiss button (upstream
//   only marked the root).
"use client"

import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"

interface StickyBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hide the dismiss button for banners that must stay put */
  dismissible?: boolean
  /** Called after the banner is dismissed */
  onDismiss?: () => void
  children: React.ReactNode
}

/**
 * Announcement bar that pins to the top of the page and can be dismissed.
 * Sits above a sticky header when both are present.
 */
function StickyBanner({
  dismissible = true,
  onDismiss,
  children,
  className,
  ...props
}: StickyBannerProps) {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div
      {...props}
      data-slot="sticky-banner"
      className={cn(
        "sticky top-0 z-60 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/75 px-4 py-2.5 text-center text-sm text-primary-foreground",
        className
      )}
    >
      <div data-slot="sticky-banner-content" className="flex-1">
        {children}
      </div>
      {dismissible && (
        <button
          type="button"
          data-slot="sticky-banner-dismiss"
          aria-label="Dismiss announcement"
          onClick={() => {
            setOpen(false)
            onDismiss?.()
          }}
          className="-mr-1 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M3 3l8 8M11 3l-8 8" />
          </svg>
        </button>
      )}
    </div>
  )
}

export { StickyBanner }

export type { StickyBannerProps }
