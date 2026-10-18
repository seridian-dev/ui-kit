import * as class_variance_authority_types from 'class-variance-authority/types';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';

declare const timerVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const timerIconVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const timerDisplayVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TimerRootProps = {
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<typeof timerVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type TimerIconProps = {
    /** Custom icon to display instead of default Clock */
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
} & VariantProps<typeof timerIconVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type TimerDisplayProps = {
    /** Time value to display */
    time: string;
    /** Optional label for accessibility */
    label?: string;
} & VariantProps<typeof timerDisplayVariants> & React__default.HTMLAttributes<HTMLDivElement>;
type UseTimerOptions = {
    /** Whether the timer should be running */
    loading?: boolean;
    /** Callback fired on each tick with elapsed time */
    onTick?: (seconds: number, milliseconds: number) => void;
    /** Whether to reset timer when loading state changes */
    resetOnLoadingChange?: boolean;
    /** Time format to use */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
};
type UseTimerReturn = {
    /** Total elapsed seconds */
    elapsedTime: number;
    /** Current milliseconds (0-999) */
    milliseconds: number;
    /** Formatted time strings */
    formattedTime: {
        seconds: string;
        milliseconds: string;
        display: string;
    };
    /** Whether timer is currently running */
    isRunning: boolean;
    /** Reset timer to 0 */
    reset: () => void;
    /** Start the timer */
    start: () => void;
    /** Stop the timer */
    stop: () => void;
};
/**
 * Root container for timer components
 */
declare const TimerRoot: React__default.ForwardRefExoticComponent<{
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Icon component for timer with loading animation
 */
declare const TimerIcon: React__default.ForwardRefExoticComponent<{
    /** Custom icon to display instead of default Clock */
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
} & VariantProps<(props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    loading?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Display component for formatted time
 */
declare const TimerDisplay: React__default.ForwardRefExoticComponent<{
    /** Time value to display */
    time: string;
    /** Optional label for accessibility */
    label?: string;
} & VariantProps<(props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & React__default.RefAttributes<HTMLDivElement>>;
type TimerProps = TimerRootProps & UseTimerOptions & {
    /** Time format to display */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
} & React__default.HTMLAttributes<HTMLDivElement>;
declare const Timer: React__default.ForwardRefExoticComponent<{
    /** Whether the timer is in loading/running state */
    loading?: boolean;
} & VariantProps<(props?: ({
    variant?: "default" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React__default.HTMLAttributes<HTMLDivElement> & UseTimerOptions & {
    /** Time format to display */
    format?: "SS.MS" | "MM:SS" | "HH:MM:SS";
} & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Hook for managing timer state and formatting
 */
declare function useTimer({ loading, onTick, resetOnLoadingChange, format, }?: UseTimerOptions): UseTimerReturn;

export { Timer, TimerDisplay, type TimerDisplayProps, TimerIcon, type TimerIconProps, type TimerProps, TimerRoot, type TimerRootProps, type UseTimerOptions, type UseTimerReturn, useTimer };
