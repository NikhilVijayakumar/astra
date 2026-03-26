import { FC } from 'react';
export type SeverityLevel = 'CRITICAL' | 'WARNING' | 'URGENT' | 'INFO' | 'SUCCESS';
export interface SeverityBadgeProps {
    level: SeverityLevel | string;
}
export declare const SeverityBadge: FC<SeverityBadgeProps>;
