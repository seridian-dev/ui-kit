// Adapted from Velora UI's iPhone Mockup (MIT,
// github.com/ColorlibHQ/velora-ui), verified against the real upstream source
// at
// https://raw.githubusercontent.com/ColorlibHQ/velora-ui/main/src/components/velora/iphone-mockup.tsx
// (fetched directly, not reconstructed). Behavior/props are unchanged;
// adapted to this kit's conventions.
//
// Deviations from upstream:
// - The hardware grays are kept hardcoded and documented as intrinsic to the
//   effect: side buttons `bg-neutral-700`, bezel `border-neutral-800`, and
//   dynamic island `bg-neutral-900`. They depict the physical device (an
//   always-dark aluminum/glass frame), so re-theming them to muted tokens
//   would make the frame stop reading as an iPhone against light content.
//   The screen itself uses this kit's `bg-background` token.
// - Added `import * as React from "react"` (upstream referenced
//   `React.HTMLAttributes`/`React.ReactNode` via the UMD global without
//   importing React, which does not typecheck under this kit's tsconfig).
// - `data-slot` added to the frame, dynamic island and screen (upstream only
//   marked the root).
import * as React from "react"

import { cn } from "@/lib/utils"

interface IPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * iPhone frame with dynamic island and side buttons — drop any
 * screen content inside.
 */
function IPhoneMockup({ className, children, ...props }: IPhoneMockupProps) {
  return (
    <div
      data-slot="iphone-mockup"
      className={cn("relative mx-auto w-70", className)}
      {...props}
    >
      {/* Side buttons */}
      <span className="absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" />

      <div
        data-slot="iphone-mockup-frame"
        className="relative aspect-[9/19] overflow-hidden rounded-[3rem] border-10 border-neutral-800 bg-background shadow-2xl"
      >
        {/* Dynamic island */}
        <span
          data-slot="iphone-mockup-dynamic-island"
          className="absolute top-2.5 left-1/2 z-20 h-6.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
        />
        <div data-slot="iphone-mockup-screen" className="absolute inset-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export { IPhoneMockup }

export type { IPhoneMockupProps }
