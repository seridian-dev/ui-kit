import * as React from 'react';

declare function BentoGrid({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function BentoCard({ name, className, background, Icon, description, href, cta, ...props }: React.ComponentProps<"div"> & {
    name: string;
    className: string;
    background: React.ReactNode;
    Icon: React.ElementType;
    description: string;
    href: string;
    cta: string;
}): React.JSX.Element;

export { BentoCard, BentoGrid };
