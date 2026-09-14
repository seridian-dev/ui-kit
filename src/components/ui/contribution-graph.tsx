// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Contribution Graph (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Engine: date-fns (MIT).

import * as React from "react"
import {
  addDays,
  differenceInCalendarWeeks,
  format,
  getMonth,
  max as maxDate,
  min as minDate,
  parseISO,
  startOfWeek,
} from "date-fns"

import { cn } from "@/lib/utils"

interface ContributionDataPoint {
  date: string
  count: number
}

const LEVEL_ALPHAS = [0, 25, 50, 75, 100] as const

const WEEKDAY_LABELS: (string | null)[] = [
  null,
  "Mon",
  null,
  "Wed",
  null,
  "Fri",
  null,
]

interface ContributionGraphProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  data: ContributionDataPoint[]
  max?: number
  monthLabels?: boolean
  weekdayLabels?: "none" | "left"
}

function toLevel(count: number, max: number): number {
  if (max <= 0 || count <= 0) return 0
  return Math.min(4, Math.max(1, Math.ceil((count / max) * 4)))
}

function ContributionGraph({
  data,
  max: maxProp,
  monthLabels: showMonthLabels = true,
  weekdayLabels = "left",
  className,
  ...props
}: ContributionGraphProps) {
  const countByDate = React.useMemo(() => {
    const map = new Map<string, number>()
    for (const point of data) map.set(point.date, point.count)
    return map
  }, [data])

  const { firstWeek, weeks, resolvedMax } = React.useMemo(() => {
    const dates = data
      .map((point) => parseISO(point.date))
      .filter((date) => !Number.isNaN(date.getTime()))
    const earliest = dates.length > 0 ? minDate(dates) : new Date()
    const latest = dates.length > 0 ? maxDate(dates) : new Date()
    const start = startOfWeek(earliest)
    const derivedMax = data.reduce(
      (acc, point) => Math.max(acc, point.count),
      0
    )
    return {
      firstWeek: start,
      weeks: Math.max(
        1,
        dates.length > 0
          ? differenceInCalendarWeeks(startOfWeek(latest), start) + 1
          : 1
      ),
      resolvedMax: maxProp ?? Math.max(1, derivedMax),
    }
  }, [data, maxProp])

  const cells: React.ReactNode[] = []
  for (let i = 0; i < weeks * 7; i++) {
    const date = addDays(firstWeek, i)
    const key = format(date, "yyyy-MM-dd")
    const count = countByDate.get(key) ?? 0
    const level = toLevel(count, resolvedMax)
    const alpha = LEVEL_ALPHAS[level] ?? 0
    cells.push(
      <div
        key={key}
        data-slot="contribution-graph-cell"
        data-level={level}
        title={`${count} ${count === 1 ? "contribution" : "contributions"} on ${format(date, "MMM d, yyyy")}`}
        className="size-3 rounded-sm"
        style={{
          backgroundColor: `color-mix(in oklab, var(--color-primary) ${alpha}%, var(--color-muted))`,
          gridColumn: Math.floor(i / 7) + 1,
          gridRow: (i % 7) + 2,
        }}
      />
    )
  }

  const monthSpans: { column: number; label: string }[] = []
  if (showMonthLabels) {
    let previousMonth = -1
    for (let w = 0; w < weeks; w++) {
      const weekStart = addDays(firstWeek, w * 7)
      const currentMonth = getMonth(weekStart)
      if (currentMonth !== previousMonth) {
        monthSpans.push({ column: w, label: format(weekStart, "MMM") })
        previousMonth = currentMonth
      }
    }
  }

  return (
    <div
      data-slot="contribution-graph"
      className={cn("flex w-full text-[0.6rem]", className)}
      {...props}
    >
      {weekdayLabels === "left" && (
        <div
          aria-hidden="true"
          data-slot="contribution-graph-weekdays"
          className="mr-1.5 flex shrink-0 flex-col gap-[3px]"
          style={
            showMonthLabels ? { paddingTop: "calc(1rem + 3px)" } : undefined
          }
        >
          {WEEKDAY_LABELS.map((label, index) => (
            <div
              key={index}
              className="flex h-3 items-center text-muted-foreground"
            >
              {label}
            </div>
          ))}
        </div>
      )}
      <div data-slot="contribution-graph-scroll" className="overflow-x-auto pb-1">
        <div
          data-slot="contribution-graph-grid"
          className="grid w-max gap-[3px]"
          style={{
            gridTemplateColumns: `repeat(${weeks}, 0.75rem)`,
            gridTemplateRows: showMonthLabels
              ? "1rem repeat(7, 0.75rem)"
              : "repeat(7, 0.75rem)",
          }}
        >
          {showMonthLabels &&
            monthSpans.map(({ column, label }) => (
              <div
                key={`${column}-${label}`}
                data-slot="contribution-graph-month"
                className="text-muted-foreground"
                style={{ gridColumn: column + 1, gridRow: 1 }}
              >
                {label}
              </div>
            ))}
          {cells}
        </div>
      </div>
    </div>
  )
}

export { ContributionGraph }
export type { ContributionGraphProps, ContributionDataPoint }
