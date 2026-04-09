import { FC, ReactNode } from 'react';
export interface HeaderActionConfig {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
}
export interface PageHeaderProps {
    title: string;
    subtitle?: string;
    primaryAction?: HeaderActionConfig;
    secondaryAction?: HeaderActionConfig;
    leadingMeta?: ReactNode;
    trailingMeta?: ReactNode;
}
export declare const PageHeader: FC<PageHeaderProps>;
