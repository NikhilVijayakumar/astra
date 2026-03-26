import { FC } from 'react';
export interface AlertListItemProps {
    id: string;
    source: string;
    timestamp: string;
    message: string;
    severity: 'CRITICAL' | 'WARNING' | 'INFO';
    read: boolean;
}
export declare const AlertListItem: FC<AlertListItemProps>;
