// Clean-room implementation for @seridian/ui-kit.
// A country-flag component wrapping the flag-icons CSS package (MIT,
// https://flagicons.lipis.dev — flag artwork by Panayiotis Lipiridis).
// Functional design inspired by the publicly documented behavior of Flagcn
// (https://flagcn.dev) — no upstream source code was viewed or copied.
// NOTE: requires `@import "flag-icons/css/flag-icons.min.css";` in
// src/styles/globals.css (handled at the kit level, see README).

import * as React from "react"

import { cn } from "@/lib/utils"

type FlagRatio = "4x3" | "1x1"

/**
 * Country flag rendered via the flag-icons CSS contract
 * (`fi` base class + `fi-{code}` country class, `fis` for 1x1).
 *
 * Sizing: flag-icons scales via font-size (the flag fills an em box), so
 * size via className text-* (font-size drives width/height), e.g. `text-2xl`.
 */
export interface FlagProps extends Omit<React.ComponentProps<"span">, "role"> {
  /** ISO 3166-1 alpha-2 code, case-insensitive (normalized to lowercase). */
  country: string
  /** Aspect ratio; defaults to "4x3". */
  ratio?: FlagRatio
  /** Hide from assistive technology; defaults to false. */
  decorative?: boolean
  /** Accessible label override; defaults to `${code.toUpperCase()} flag`. */
  alt?: string
  /** Add `overflow-hidden rounded-sm` for slightly rounded corners. */
  rounded?: boolean
}

let devWarnedInvalidCode = false

function Flag({
  country,
  ratio = "4x3",
  decorative = false,
  alt,
  rounded = false,
  className,
  style,
  ...props
}: FlagProps) {
  const code = country.trim().toLowerCase()
  const isValidCode = /^[a-z]{2}$/.test(code)

  if (
    process.env.NODE_ENV !== "production" &&
    !devWarnedInvalidCode &&
    !isValidCode
  ) {
    devWarnedInvalidCode = true
    console.warn(
      `<Flag> expected a 2-letter ISO 3166-1 alpha-2 code, got "${country}" — the flag will render blank.`
    )
  }

  const src = `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/${ratio}/${code}.svg`

  return (
    <span
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : (alt ?? `${code.toUpperCase()} flag`)}
      className={cn(
        "inline-block bg-contain bg-center bg-no-repeat align-middle leading-none",
        ratio === "4x3" ? "aspect-[4/3] w-[1.333em]" : "aspect-square w-[1em]",
        rounded && "overflow-hidden rounded-sm",
        className
      )}
      style={{
        backgroundImage: isValidCode ? `url("${src}")` : undefined,
        ...style,
      }}
      {...props}
    />
  )
}

export { Flag }
