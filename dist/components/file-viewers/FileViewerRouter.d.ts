import { FC } from 'react';
interface FileViewerRouterProps {
    fileName: string;
    fileContent?: string;
    fileEncoding?: 'text' | 'base64';
    mimeType?: string;
}
export declare const FileViewerRouter: FC<FileViewerRouterProps>;
export {};
