import { FC } from 'react';
export interface WeeklyReportCardLabels {
    improvedTitle: string;
    slipsTitle: string;
    risksTitle: string;
    emptyImproved: string;
    emptySlips: string;
    emptyRisks: string;
}
export interface WeeklyReportCardProps {
    owner: string;
    domain: string;
    customMetricLabel?: string;
    customMetricValue?: string;
    improvements: string[];
    slips: string[];
    risks: string[];
    labels: WeeklyReportCardLabels;
}
export declare const WeeklyReportCard: FC<WeeklyReportCardProps>;
