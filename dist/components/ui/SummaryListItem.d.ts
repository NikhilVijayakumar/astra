import { FC } from 'react';
export interface SummaryListItemProps {
    id: string;
    summary: string;
    source: string;
    classification: string;
}
export declare const SummaryListItem: FC<SummaryListItemProps>;
