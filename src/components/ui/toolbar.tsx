// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Coss UI's
// Toolbar (https://coss.com/ui) — no upstream source code was viewed or
// copied. Rebuilt on this kit's Radix-based conventions.
//
// Coss styles Base UI's Toolbar (a grouped container for buttons/controls
// with roving arrow-key focus). This kit rebuilds the documented API on the
// Radix Toolbar primitive from the `radix-ui` meta-package, which provides
// the same roving-focus behavior: Toolbar (root), ToolbarButton,
// ToolbarLink, ToolbarSeparator. Base UI's Toolbar.Group has no Radix
// counterpart, so ToolbarGroup here is a plain styled wrapper (Radix roving
// focus flows through React context, so plain grouping divs don't break
// arrow-key navigation). ToolbarToggleGroup/ToolbarToggleItem wrap Radix's
// toolbar-aware toggle primitives, styled with this kit's toggleVariants.
// ToolbarButton defaults to ghost/sm buttonVariants; pass variant/size to
// override (e.g. variant="outline" to render as an outlined control).
//
// Beyond existing globals.css animations: none needed.
"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Toolbar as ToolbarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { toggleVariants } from "@/components/ui/toggle"

type ToolbarContextValue = {
  orientation: "horizontal" | "vertical"
}

const ToolbarContext = React.createContext<ToolbarContextValue>({
  orientation: "horizontal",
})

function Toolbar({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return (
    <ToolbarContext.Provider value={{ orientation }}>
      <ToolbarPrimitive.Root
        data-slot="toolbar"
        data-orientation={orientation}
        orientation={orientation}
        className={cn(
          "flex w-fit items-center gap-0.5 rounded-lg border border-input bg-card p-1 shadow-xs data-vertical:flex-col",
          className
        )}
        {...props}
      />
    </ToolbarContext.Provider>
  )
}

function ToolbarGroup({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = React.useContext(ToolbarContext)
  return (
    <div
      role="group"
      data-slot="toolbar-group"
      data-orientation={orientation}
      className={cn(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ToolbarButton({
  className,
  variant = "ghost",
  size = "sm",
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Button> &
  Pick<VariantProps<typeof buttonVariants>, "variant" | "size">) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn(
        "mx-0.5 shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:h-4 data-vertical:w-px",
        className
      )}
      {...props}
    />
  )
}

function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link>) {
  return (
    <ToolbarPrimitive.Link
      data-slot="toolbar-link"
      className={cn(
        "flex h-7 items-center rounded-[min(var(--radius-md),12px)] px-2 text-sm font-medium outline-none underline-offset-4 hover:bg-muted hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    />
  )
}

function ToolbarToggleGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup>) {
  const { orientation } = React.useContext(ToolbarContext)
  return (
    <ToolbarPrimitive.ToggleGroup
      data-slot="toolbar-toggle-group"
      data-orientation={orientation}
      className={cn(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ToolbarToggleItem({
  className,
  variant = "outline",
  size = "sm",
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem> &
  Pick<VariantProps<typeof toggleVariants>, "variant" | "size">) {
  return (
    <ToolbarPrimitive.ToggleItem
      data-slot="toolbar-toggle-item"
      data-variant={variant}
      data-size={size}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export {
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
}
