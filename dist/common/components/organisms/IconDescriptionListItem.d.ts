import { default as React } from 'react';
import { LucideIcon } from 'lucide-react';
interface IconDescriptionListItemProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    index: number;
    t: (key: string) => string;
}
export declare const IconDescriptionListItem: React.FC<IconDescriptionListItemProps>;
export {};
