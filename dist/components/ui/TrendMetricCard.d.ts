import { FC } from 'react';
export type MetricTrend = 'up' | 'down' | 'neutral';
export interface TrendMetricCardProps {
    label: string;
    value: string | number;
    trendValue?: string;
    trend?: MetricTrend;
}
export declare const TrendMetricCard: FC<TrendMetricCardProps>;
