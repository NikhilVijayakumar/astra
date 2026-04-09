import { ReactNode } from 'react';
export interface CardProps {
    title?: string;
    supportingText?: string;
    children?: ReactNode;
    action?: ReactNode;
}
export declare const Card: ({ title, supportingText, children, action }: CardProps) => import("react/jsx-runtime").JSX.Element;
