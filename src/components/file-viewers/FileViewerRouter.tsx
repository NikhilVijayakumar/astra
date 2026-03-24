import { FC } from 'react';
import { CsvViewer } from './CsvViewer';
import { MdViewer } from './MdViewer';
import { ImageViewer } from './ImageViewer';
import { JsonViewer } from './JsonViewer';
import { Box, Typography } from '@mui/material';

interface FileViewerRouterProps {
  fileName: string;
  fileContent?: string;
  fileEncoding?: 'text' | 'base64';
  mimeType?: string;
}

export const FileViewerRouter: FC<FileViewerRouterProps> = ({ fileName, fileContent, fileEncoding, mimeType }) => {
  const ext = fileName.split('.').pop()?.toLowerCase();

  switch (ext) {
    case 'csv':
      return <CsvViewer fileName={fileName} fileContent={fileContent} />;
    case 'md':
    case 'markdown':
    case 'txt':
      return <MdViewer fileName={fileName} fileContent={fileContent} />;
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
    case 'webp':
      return <ImageViewer fileName={fileName} fileContent={fileContent} fileEncoding={fileEncoding} mimeType={mimeType} />;
    case 'json':
    case 'jsonl':
      return <JsonViewer fileName={fileName} fileContent={fileContent} />;
    default:
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6">Binary / Unsupported File</Typography>
          <Typography variant="body2" color="text.secondary">
            Extension: .{ext}
          </Typography>
        </Box>
      );
  }
};
