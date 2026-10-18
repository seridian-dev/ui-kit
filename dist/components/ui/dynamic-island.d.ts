import React__default, { ReactNode } from 'react';

declare const stiffness = 400;
declare const damping = 30;
type SizePresets = "reset" | "empty" | "default" | "compact" | "compactLong" | "large" | "long" | "minimalLeading" | "minimalTrailing" | "compactMedium" | "medium" | "tall" | "ultra" | "massive";
declare const SIZE_PRESETS: {
    readonly RESET: "reset";
    readonly EMPTY: "empty";
    readonly DEFAULT: "default";
    readonly COMPACT: "compact";
    readonly COMPACT_LONG: "compactLong";
    readonly LARGE: "large";
    readonly LONG: "long";
    readonly MINIMAL_LEADING: "minimalLeading";
    readonly MINIMAL_TRAILING: "minimalTrailing";
    readonly COMPACT_MEDIUM: "compactMedium";
    readonly MEDIUM: "medium";
    readonly TALL: "tall";
    readonly ULTRA: "ultra";
    readonly MASSIVE: "massive";
};
type Preset = {
    width: number;
    height?: number;
    aspectRatio: number;
    borderRadius: number;
};
declare const DynamicIslandSizePresets: Record<SizePresets, Preset>;
type BlobStateType = {
    size: SizePresets;
    previousSize: SizePresets | undefined;
    animationQueue: Array<{
        size: SizePresets;
        delay: number;
    }>;
    isAnimating: boolean;
};
type BlobAction = {
    type: "SET_SIZE";
    newSize: SizePresets;
} | {
    type: "INITIALIZE";
    firstState: SizePresets;
} | {
    type: "SCHEDULE_ANIMATION";
    animationSteps: Array<{
        size: SizePresets;
        delay: number;
    }>;
} | {
    type: "ANIMATION_END";
};
type BlobContextType = {
    state: BlobStateType;
    dispatch: React__default.Dispatch<BlobAction>;
    setSize: (size: SizePresets) => void;
    scheduleAnimation: (animationSteps: Array<{
        size: SizePresets;
        delay: number;
    }>) => void;
    presets: Record<SizePresets, Preset>;
};
declare const BlobContext: React__default.Context<BlobContextType | undefined>;
interface DynamicIslandProviderProps {
    children: React__default.ReactNode;
    initialSize?: SizePresets;
    initialAnimation?: Array<{
        size: SizePresets;
        delay: number;
    }>;
}
declare const DynamicIslandProvider: React__default.FC<DynamicIslandProviderProps>;
declare const useDynamicIslandSize: () => BlobContextType;
declare const useScheduledAnimations: (animations: Array<{
    size: SizePresets;
    delay: number;
}>) => void;
declare const DynamicIsland: ({ children, id, ...props }: {
    children: ReactNode;
    id: string;
}) => React__default.JSX.Element;
type DynamicContainerProps = {
    className?: string;
    children?: React__default.ReactNode;
};
declare const DynamicContainer: ({ className, children }: DynamicContainerProps) => React__default.JSX.Element;
type DynamicChildrenProps = {
    className?: string;
    children?: React__default.ReactNode;
};
declare const DynamicDiv: ({ className, children }: DynamicChildrenProps) => React__default.JSX.Element;
type MotionProps = {
    className: string;
    children: React__default.ReactNode;
};
declare const DynamicTitle: ({ className, children }: MotionProps) => React__default.JSX.Element;
declare const DynamicDescription: ({ className, children }: MotionProps) => React__default.JSX.Element;

export { BlobContext, DynamicContainer, DynamicDescription, DynamicDiv, DynamicIsland, DynamicIslandProvider, DynamicIslandSizePresets, DynamicTitle, SIZE_PRESETS, type SizePresets, damping, stiffness, useDynamicIslandSize, useScheduledAnimations };
