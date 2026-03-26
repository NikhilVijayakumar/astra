import { FC } from 'react';
export type StatusDotTone = 'ok' | 'warning' | 'error' | 'executing' | 'waiting' | 'default';
export interface StatusDotProps {
    tone: StatusDotTone;
    size?: number;
}
export declare const StatusDot: FC<StatusDotProps>;
