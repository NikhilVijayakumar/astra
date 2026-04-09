import { FC } from 'react';
import { StatusDotTone } from '../atoms/StatusDot';
export type HealthTone = StatusDotTone;
export interface HealthSummaryItem {
    label: string;
    value: string;
    tone?: HealthTone;
}
export interface HealthAction {
    id: string;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}
export interface OperationHealthPanelProps {
    title: string;
    subtitle?: string;
    summaryItems: HealthSummaryItem[];
    actions?: HealthAction[];
    footerText?: string;
    isBusy?: boolean;
}
export declare const OperationHealthPanel: FC<OperationHealthPanelProps>;
