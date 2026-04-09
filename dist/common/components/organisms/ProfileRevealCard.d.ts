import { default as React } from 'react';
interface ProfileRevealCardProps {
    name: string;
    nameKey: string;
    role: string;
    bio: string;
    imageUrl: string;
    themeColor: string;
    primaryBadge?: string;
    secondaryMetadata?: string;
    t: (key: string) => string;
}
export declare const ProfileRevealCard: React.FC<ProfileRevealCardProps>;
export {};
