import { default as React } from 'react';
export type StatusColorType = 'success' | 'error' | 'warning' | 'info' | 'default';
export interface StatusActionCardProps {
    id: string;
    title: string;
    subtitle: string;
    statusLabel: string;
    statusColor: StatusColorType;
    lastChecked?: string;
    lastCheckedLabel?: string;
    isConnectDisabled?: boolean;
    onDelete?: (id: string) => void;
    onConnect?: (id: string) => Promise<void> | void;
    onCheckStatus?: (id: string) => Promise<void> | void;
    connectLabel?: string;
    loadingLabel?: string;
}
export declare const StatusActionCard: React.FC<StatusActionCardProps>;
