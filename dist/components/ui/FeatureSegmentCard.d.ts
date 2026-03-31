import { default as React } from 'react';
import { LucideIcon } from 'lucide-react';
interface FeatureSegmentCardProps {
    title: string;
    subTitle: string;
    color: string;
    Icon: LucideIcon;
    tags?: string[];
    index: number;
    t: (key: string) => string;
}
export declare const FeatureSegmentCard: React.FC<FeatureSegmentCardProps>;
export {};
