import { default as React } from 'react';
import { LucideIcon } from 'lucide-react';
interface InteractiveStepNodeProps {
    label: string;
    description: string;
    Icon: LucideIcon;
    isActive: boolean;
    onClick: () => void;
    index: number;
}
export declare const InteractiveStepNode: React.FC<InteractiveStepNodeProps>;
export {};
