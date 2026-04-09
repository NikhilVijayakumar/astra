import { FC } from 'react';
export type StepStatus = "not-started" | "in-progress" | "completed" | "blocked";
export interface ProgressStep {
    id: string;
    label: string;
    shortLabel?: string;
    status?: StepStatus;
}
export interface MultiStepProgressIndicatorProps {
    steps: ProgressStep[];
    currentStepId: string;
}
export declare const MultiStepProgressIndicator: FC<MultiStepProgressIndicatorProps>;
