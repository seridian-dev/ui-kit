// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// RelativeTime (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Built on this kit's primitives; zero additional dependencies.
"use client"

import * as React from "react"
import { formatDistanceToNow } from "date-fns"

import { cn } from "@/lib/utils"

function RelativeTime({
  date,
  interval = 60_000,
  prefix,
  suffix,
  className,
  ...props
}: React.ComponentProps<"time"> & {
  date: Date | string | number
  interval?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}) {
  const [now, setNow] = React.useState(() => Date.now())

  React.useEffect(() => {
    let intervalId: number | undefined

    const start = () => {
      if (intervalId === undefined && interval > 0) {
        intervalId = window.setInterval(() => setNow(Date.now()), interval)
      }
    }
    const stop = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
        intervalId = undefined
      }
    }
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop()
      } else {
        setNow(Date.now())
        start()
      }
    }

    start()
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      stop()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [interval])

  const dateObject = React.useMemo(() => new Date(date), [date])
  const isValid = !Number.isNaN(dateObject.getTime())

  return (
    <time
      data-slot="relative-time"
      dateTime={isValid ? dateObject.toISOString() : undefined}
      title={isValid ? dateObject.toLocaleString() : undefined}
      className={cn("whitespace-nowrap text-sm text-muted-foreground", className)}
      {...props}
    >
      {prefix}
      {isValid
        ? formatDistanceToNow(dateObject, { addSuffix: true })
        : null}
      {suffix}
    </time>
  )
}

export { RelativeTime }
