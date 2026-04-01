import { default as React } from 'react';
export interface FileTreeNode {
    id: string;
    name: string;
    type: 'folder' | 'file';
    childrenNodes?: FileTreeNode[];
    secondaryLabel?: string;
}
export interface FileTreeProps {
    nodes: FileTreeNode[];
    expandedIds: Set<string>;
    selectedId: string | null;
    onToggle: (id: string) => void;
    onSelect: (id: string) => void;
    level?: number;
}
export declare const FileTree: React.FC<FileTreeProps>;
