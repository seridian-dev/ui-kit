// Adapted from Magic UI's Avatar Circles (MIT,
// github.com/magicuidesign/magicui), verified against the real upstream
// source at
// https://raw.githubusercontent.com/magicuidesign/magicui/main/apps/www/registry/magicui/avatar-circles.tsx
// (fetched directly, not reconstructed from docs). Behavior/props are
// unchanged; the component uses no hooks, so upstream's "use client"
// directive is dropped.
//
// Deviations from upstream: `data-slot="avatar-circles"` /
// `data-slot="avatar-circles-item"` / `data-slot="avatar-circles-image"` /
// `data-slot="avatar-circles-more"` added; avatar ring `border-white
// dark:border-gray-800` replaced with `border-background` (matches the page
// background in both modes, which is the visual intent); the "+N" badge's
// `border-white bg-black text-white hover:bg-gray-600 dark:border-gray-800
// dark:bg-white dark:text-black` replaced with `border-background
// bg-foreground text-background hover:bg-muted-foreground`.
import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div
      data-slot="avatar-circles"
      className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}
    >
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          data-slot="avatar-circles-item"
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            data-slot="avatar-circles-image"
            className="h-10 w-10 rounded-full border-2 border-background"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          data-slot="avatar-circles-more"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-foreground text-center text-xs font-medium text-background hover:bg-muted-foreground"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  )
}
