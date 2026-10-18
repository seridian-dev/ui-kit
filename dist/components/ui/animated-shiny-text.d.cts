import { FC, ComponentPropsWithoutRef } from 'react';

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
    shimmerWidth?: number;
}
declare const AnimatedShinyText: FC<AnimatedShinyTextProps>;

export { AnimatedShinyText, type AnimatedShinyTextProps };
