import { FC } from 'react';
interface ImageViewerProps {
    fileName: string;
    fileContent?: string;
    fileEncoding?: "text" | "base64";
    mimeType?: string;
}
export declare const ImageViewer: FC<ImageViewerProps>;
export {};
