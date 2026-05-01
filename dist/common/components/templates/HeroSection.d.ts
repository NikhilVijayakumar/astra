import { FC, ReactNode } from 'react';
export type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "stagger-fade" | "typewriter";
export interface HeroSectionProps {
    headline: string;
    description?: string;
    primaryActionLabel?: string;
    onPrimaryAction?: () => void;
    children?: ReactNode;
    enableAnimation?: boolean;
    animationVariant?: AnimationVariant;
    animationDuration?: number;
    animationDelay?: number;
    animationStagger?: number;
}
export declare const HeroSection: FC<HeroSectionProps>;
