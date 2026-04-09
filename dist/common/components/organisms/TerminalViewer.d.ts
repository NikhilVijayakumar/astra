import { default as React } from 'react';
export interface LogEntry {
    id: string | number;
    timestamp: string;
    level: string;
    message: string;
}
export interface TerminalViewerProps {
    logs: LogEntry[];
    emptyMessage?: string;
    bottomRef?: React.RefObject<HTMLDivElement>;
}
export declare const TerminalViewer: React.FC<TerminalViewerProps>;
