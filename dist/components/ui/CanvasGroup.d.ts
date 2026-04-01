import { default as React } from 'react';
export interface CanvasGroupProps {
    label: string;
    description: string;
    selected?: boolean;
    onChangeLabel?: (val: string) => void;
    onChangeDescription?: (val: string) => void;
    children?: React.ReactNode;
}
export declare const CanvasGroup: React.MemoExoticComponent<({ label, description, selected, onChangeLabel, onChangeDescription, children }: CanvasGroupProps) => import("react/jsx-runtime").JSX.Element>;
