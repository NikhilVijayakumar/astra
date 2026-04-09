import { ReactElement } from 'react';
export type ReviewDecisionMode = "idle" | "approve" | "reject";
export interface ReviewDecisionDialogLabels {
    title: string;
    selectAction: string;
    approveLabel: string;
    rejectLabel: string;
    confirmApprove: string;
    confirmReject: string;
    approveNote: string;
    approveNotePlaceholder: string;
    rejectNote: string;
    rejectNotePlaceholder: string;
    noteMinLength: string;
    noteRequired: string;
    cancel: string;
    back: string;
}
export interface ReviewDecisionDialogProps {
    isOpen: boolean;
    mode: ReviewDecisionMode;
    entityType: string;
    entityName?: string;
    entitySummary?: string;
    approveNote: string;
    rejectNote: string;
    onModeChange: (mode: ReviewDecisionMode) => void;
    onApproveNoteChange: (note: string) => void;
    onRejectNoteChange: (note: string) => void;
    onApprove: (reviewNote?: string) => void;
    onReject: (reviewNote: string) => void;
    onCancel: () => void;
    isLoading?: boolean;
    minRejectNoteLength?: number;
    labels?: Partial<ReviewDecisionDialogLabels>;
}
export declare const ReviewDecisionDialog: ({ isOpen, mode, entityType, entityName, entitySummary, approveNote, rejectNote, onModeChange, onApproveNoteChange, onRejectNoteChange, onApprove, onReject, onCancel, isLoading, minRejectNoteLength, labels, }: ReviewDecisionDialogProps) => ReactElement;
