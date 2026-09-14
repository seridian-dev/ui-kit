// Adapted from Magic UI's Word Rotate (MIT, github.com/magicuidesign/magicui),
// verified against the real upstream source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/word-rotate.tsx
// (fetched directly, not reconstructed from docs). Public API/props unchanged
// (`words`, `duration`, `motionProps`, `className` with upstream's default
// enter/exit motion values). No colors to re-theme (upstream hardcodes none).
//
// Deviations from upstream: `data-slot="word-rotate"` (wrapper) and
// `data-slot="word-rotate-text"` (animated heading) added.
//
// CSS AUDIT: none needed — the enter/exit rotation is driven entirely by
// motion/react (AnimatePresence, JS), not by any Tailwind animation utility
// or @keyframes.
"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div data-slot="word-rotate" className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          data-slot="word-rotate-text"
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
