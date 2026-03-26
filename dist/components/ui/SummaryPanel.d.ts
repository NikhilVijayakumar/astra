import { FC } from 'react';
export interface SummaryLine {
    text: string;
    variant?: 'body2' | 'caption';
}
export interface SummaryPanelProps {
    title: string;
    lines: SummaryLine[];
}
export declare const SummaryPanel: FC<SummaryPanelProps>;
