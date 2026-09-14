// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Spinner (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Built on this kit's primitives; zero additional dependencies.
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "inline-flex shrink-0 items-center justify-center text-primary",
  {
    variants: {
      size: {
        sm: "size-4",
        default: "size-6",
        lg: "size-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof spinnerVariants>) {
  return (
    <span
      role="status"
      data-slot="spinner"
      data-size={size}
      className={cn(spinnerVariants({ size, className }))}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-full animate-spin"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="44 63"
        />
      </svg>
      <span className="sr-only">Loading</span>
    </span>
  )
}

export { Spinner, spinnerVariants }
