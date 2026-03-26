import { FC } from 'react';
export interface EntityConfidenceRowProps {
    id: string;
    title: string;
    secondaryLabel: string;
    statusTag: string;
    confidence: number;
    confidenceLabel: string;
    showDivider?: boolean;
}
export declare const EntityConfidenceRow: FC<EntityConfidenceRowProps>;
