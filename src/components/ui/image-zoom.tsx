// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Image Zoom (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Engine: motion (MIT).
"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageZoomProps extends Omit<React.ComponentProps<"img">, "alt"> {
  alt: string
  zoomClassName?: string
}

function ImageZoom({ alt, src, className, zoomClassName, ...props }: ImageZoomProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          data-slot="image-zoom-trigger"
          className="block cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <img
            data-slot="image-zoom-thumbnail"
            alt={alt}
            src={src}
            className={cn("rounded-lg", className)}
            {...props}
          />
          <span className="sr-only">Zoom image</span>
        </button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="w-fit max-w-[calc(100%-2rem)] bg-transparent p-0 ring-0"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <motion.div
          data-slot="image-zoom-content"
          initial={
            reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }
          }
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.2, ease: "easeOut" }}
        >
          <img
            data-slot="image-zoom-image"
            alt={alt}
            src={src}
            className={cn(
              "max-h-[85vh] w-auto max-w-full rounded-lg object-contain",
              zoomClassName
            )}
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

export { ImageZoom }
export type { ImageZoomProps }
