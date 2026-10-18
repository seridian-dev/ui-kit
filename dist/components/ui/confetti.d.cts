import React__default, { ReactNode } from 'react';
import { Options, GlobalOptions } from 'canvas-confetti';

type Api = {
    fire: (options?: Options) => void;
};
type ConfettiRef = Api | null;
type ConfettiProps = React__default.ComponentPropsWithoutRef<"canvas"> & {
    ref?: React__default.Ref<ConfettiRef>;
    options?: Options;
    globalOptions?: GlobalOptions;
    manualstart?: boolean;
    children?: ReactNode;
};
declare function Confetti({ ref, options, globalOptions, manualstart, children, ...props }: ConfettiProps): React__default.JSX.Element;
declare function ConfettiButton({ options, children, ...props }: React__default.ComponentProps<"button"> & {
    options?: Options & GlobalOptions & {
        canvas?: HTMLCanvasElement;
    };
}): React__default.JSX.Element;

export { Confetti, ConfettiButton, type ConfettiRef };
