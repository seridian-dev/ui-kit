// Adapted from Magic UI's Animated List (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/animated-list.tsx
// (fetched directly, not reconstructed from docs). Public API unchanged: both
// `AnimatedListItem` and `AnimatedList` are exported, `delay` defaulting to
// 1000ms. No colors to re-theme (upstream hardcodes none).
//
// NOTE vs. expectations: upstream's CURRENT source animates items with
// motion/react springs (AnimatePresence + layout + spring stiffness 350 /
// damping 40) — it no longer uses tw-animate-css
// `animate-in fade-in slide-in-from-*` utilities, so none are present here.
// tw-animate-css is still available kit-wide via globals.css if needed.
//
// Deviations from upstream: `data-slot="animated-list"` (root) and
// `data-slot="animated-list-item"` (item wrapper) added.
//
// CSS AUDIT: none needed — item entrance/exit/layout is driven entirely by
// motion/react (JS), not by any Tailwind animation utility or @keyframes.
"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div
      data-slot="animated-list-item"
      {...animations}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout> | null = null

      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
        }, delay)
      }

      return () => {
        if (timeout !== null) {
          clearTimeout(timeout)
        }
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse()
      return result
    }, [index, childrenArray])

    return (
      <div
        data-slot="animated-list"
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
