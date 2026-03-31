import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material';
interface VerticalStepIndicatorProps {
    activeIndex: number;
    totalSteps: number;
    sx?: SxProps<Theme>;
}
export declare const VerticalStepIndicator: React.FC<VerticalStepIndicatorProps>;
export {};
