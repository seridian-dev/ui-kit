// Adapted from Magic UI's Scroll Progress (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/scroll-progress.tsx
// (fetched directly, not reconstructed from docs). Public API/props unchanged,
// including upstream's React 19 ref-as-prop signature (`ref?: React.Ref<HTMLDivElement>`).
//
// Deviations from upstream: `data-slot="scroll-progress"` added. The gradient
// stops `from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]` are KEPT verbatim — like
// aurora-text's stops, they are the effect's visual identity and the Astryx
// palette (restrained neutrals) has no purple/pink/orange token equivalents.
//
// CSS AUDIT: none needed — the bar is driven entirely by motion/react
// (`useScroll` feeding `scaleX` as a motion style, JS), not by any Tailwind
// animation utility or @keyframes.
"use client"

import * as React from "react"
import { motion, useScroll, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      data-slot="scroll-progress"
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
