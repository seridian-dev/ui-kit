import * as React from 'react';

interface Avatar {
    imageUrl: string;
    profileUrl: string;
}
interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: Avatar[];
}
declare const AvatarCircles: ({ numPeople, className, avatarUrls, }: AvatarCirclesProps) => React.JSX.Element;

export { AvatarCircles };
