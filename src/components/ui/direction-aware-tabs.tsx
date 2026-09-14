// Adapted from Cult UI's Direction-Aware Tabs (MIT,
// github.com/nolly-studio/cult-ui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/registry/default/ui/direction-aware-tabs.tsx
// (fetched directly, not reconstructed). Behavior/props are unchanged; adapted
// to this kit's conventions.
//
// Deviations from upstream: `data-slot` attributes added on the root, tab
// list, triggers, sliding bubble, and content area. Upstream's
// `shadow-inner-shadow` utility relies on a `--shadow-inner-shadow` theme
// token that only exists in Cult UI's own globals.css (not in this kit), so
// the token's verbatim value was inlined as an arbitrary Tailwind shadow on
// the tab track and bubble (see the token below — do not need globals.css
// registration):
//   --shadow-inner-shadow:
//     0px 1px 0px 0px oklch(0 0 0 / 0.02) inset,
//     0px 0px 0px 1px oklch(0 0 0 / 0.02) inset,
//     0px 0px 0px 1px oklch(1 0 0 / 0.25);
// The hardcoded neutrals (bg-neutral-600 track, bg-neutral-700 bubble,
// text-neutral-200/white labels) are kept verbatim: they are effect-intrinsic
// — the sliding highlight is a `mix-blend-difference` overlay whose inversion
// depends on these exact luminance values, so theme tokens would break it.
// This is a single component (upstream exports no TabsList/TabsTrigger parts).
"use client"

import { ReactNode, useMemo, useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"

type Tab = {
  id: number
  label: string
  content: ReactNode
}

interface OgImageSectionProps {
  tabs: Tab[]
  className?: string
  /** Outer container radius (e.g. `rounded-lg`) */
  rounded?: string
  /** Inner tab/bubble radius — should be outer radius minus container padding (~3px) */
  roundedInner?: string
  onChange?: () => void
}

function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  roundedInner,
  onChange,
}: OgImageSectionProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, bounds] = useMeasure()

  const content = useMemo(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content
    return activeTabContent || null
  }, [activeTab, tabs])

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1
      setDirection(newDirection)
      setActiveTab(newTabId)
      onChange ? onChange() : null
    }
  }

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  }

  return (
    <div
      className=" flex flex-col items-center w-full"
      data-slot="direction-aware-tabs"
    >
      <div
        className={cn(
          "flex space-x-1 border border-none rounded-full cursor-pointer bg-neutral-600 px-[3px] py-[3.2px] shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)]",
          className,
          rounded
        )}
        data-slot="direction-aware-tabs-list"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-neutral-200  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
              activeTab === tab.id
                ? "text-white"
                : "hover:text-neutral-300/60  text-neutral-200/80",
              rounded ? roundedInner : undefined
            )}
            data-slot="direction-aware-tabs-trigger"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className={cn(
                  "absolute inset-0 z-10 bg-neutral-700 mix-blend-difference shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)] border border-white/10",
                  rounded ? roundedInner : "rounded-full"
                )}
                data-slot="direction-aware-tabs-bubble"
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}

            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto w-full h-full overflow-hidden"
          data-slot="direction-aware-tabs-content"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="p-1" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  )
}
export { DirectionAwareTabs }
