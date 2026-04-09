export interface CanvasNoteProps {
    label: string;
    selected?: boolean;
    onChange?: (val: string) => void;
}
export declare const CanvasNote: import('react').MemoExoticComponent<({ label, selected, onChange }: CanvasNoteProps) => import("react/jsx-runtime").JSX.Element>;
