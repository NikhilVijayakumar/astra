import { FC, ReactNode } from 'react';
export interface HeroSectionProps {
    headline: string;
    description?: string;
    primaryActionLabel?: string;
    onPrimaryAction?: () => void;
    children?: ReactNode;
}
export declare const HeroSection: FC<HeroSectionProps>;
