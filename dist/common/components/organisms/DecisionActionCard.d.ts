import { FC } from 'react';
export interface DecisionAction {
    label: string;
    variant: "contained" | "outlined" | "text";
    color?: "primary" | "success" | "error";
    disabled?: boolean;
    onClick?: () => void;
}
export interface DecisionActionCardProps {
    source: string;
    description: string;
    expiryText: string;
    actions: DecisionAction[];
}
export declare const DecisionActionCard: FC<DecisionActionCardProps>;
