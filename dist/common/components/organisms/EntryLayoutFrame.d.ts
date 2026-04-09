import { FC, ReactNode } from 'react';
export interface EntryLayoutFrameProps {
    children: ReactNode;
    titleText?: string;
    enableDragRegion?: boolean;
}
export declare const EntryLayoutFrame: FC<EntryLayoutFrameProps>;
