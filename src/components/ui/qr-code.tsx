// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// QR Code (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Engine: qrcode (MIT).
"use client"

import * as React from "react"
import { toString as qrToString } from "qrcode"

import { cn } from "@/lib/utils"

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H"

interface QRCodeProps extends React.ComponentProps<"div"> {
  value: string
  size?: number
  level?: ErrorCorrectionLevel
  marginSize?: number
  fgColor?: string
  bgColor?: string
}

function applyThemeColors(svg: string, fg: string, bg: string) {
  return svg
    .replace(
      /(fill|stroke)="#(?:000000|000)"/gi,
      (_match, attr: string) => `${attr}="${fg}"`
    )
    .replace(
      /(fill|stroke)="#(?:ffffff|fff)"/gi,
      (_match, attr: string) => `${attr}="${bg}"`
    )
}

function QRCode({
  value,
  size = 160,
  level = "M",
  marginSize = 0,
  fgColor,
  bgColor,
  className,
  style,
  ...props
}: QRCodeProps) {
  const [svg, setSvg] = React.useState<string | null>(null)

  const svgOptions = React.useMemo(
    () => ({
      type: "svg" as const,
      width: size,
      margin: marginSize,
      errorCorrectionLevel: level,
    }),
    [size, marginSize, level]
  )

  React.useEffect(() => {
    let cancelled = false

    qrToString(value, svgOptions)
      .then((raw) => {
        if (cancelled) return
        setSvg(
          applyThemeColors(
            raw,
            fgColor ?? "currentColor",
            bgColor ?? "transparent"
          )
        )
      })
      .catch(() => {
        if (!cancelled) setSvg(null)
      })

    return () => {
      cancelled = true
    }
  }, [value, svgOptions, fgColor, bgColor])

  return (
    <div
      data-slot="qr-code"
      role="img"
      aria-label={`QR code for ${value}`}
      className={cn(
        "inline-block text-foreground [&_svg]:block [&_svg]:size-full",
        className
      )}
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{ __html: svg ?? "" }}
      {...props}
    />
  )
}

export { QRCode }
export type { QRCodeProps, ErrorCorrectionLevel as QRCodeErrorCorrectionLevel }
