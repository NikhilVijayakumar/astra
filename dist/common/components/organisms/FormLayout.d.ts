import { FC } from 'react';
export interface FormLayoutProps {
    title?: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}
export declare const FormLayout: FC<FormLayoutProps>;
