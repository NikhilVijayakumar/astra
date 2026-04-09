import { default as React } from 'react';
export interface HistoryEntry {
    version: number;
    createdAt: string;
}
export interface VersionHistorySelectorProps {
    entries: HistoryEntry[];
    selectedVersion: number;
    latestVersion: number;
    onVersionChange: (version: number) => void;
    versionPrefix?: string;
    latestLabel?: string;
    availableLabel?: string;
}
export declare const VersionHistorySelector: React.FC<VersionHistorySelectorProps>;
