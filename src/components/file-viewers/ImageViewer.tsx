import { FC, useState } from 'react';
import { Box, Typography, IconButton, useTheme as useMuiTheme } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { spacing } from '../../theme/tokens/spacing';

interface ImageViewerProps {
  fileName: string;
  fileContent?: string;
  fileEncoding?: 'text' | 'base64';
  mimeType?: string;
}

export const ImageViewer: FC<ImageViewerProps> = ({ fileName, fileContent, fileEncoding, mimeType }) => {
  const muiTheme = useMuiTheme();
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const imageSource = fileContent && fileEncoding === 'base64'
    ? `data:${mimeType || 'image/png'};base64,${fileContent}`
    : null;

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: muiTheme.palette.background.default
    }}>
      <Box sx={{ 
        p: spacing.sm, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: muiTheme.palette.background.paper,
        borderBottom: `1px solid ${muiTheme.palette.divider}`
      }}>
        <Typography variant="body2">{fileName}</Typography>
        <Box>
          <IconButton size="small" onClick={() => setZoom(prev => Math.min(prev + 0.2, 3))}>
            <ZoomInIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}>
            <ZoomOutIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => setRotation(prev => (prev + 90) % 360)}>
            <RotateRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {imageSource ? (
          <Box
            component="img"
            src={imageSource}
            alt={fileName}
            sx={{
              maxWidth: `${zoom * 100}%`,
              maxHeight: `${zoom * 100}%`,
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s ease-out',
              objectFit: 'contain',
            }}
          />
        ) : (
          <Box sx={{
            width: 400,
            height: 300,
            border: `1px solid ${muiTheme.palette.divider}`,
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography variant="micro" sx={{ color: muiTheme.palette.text.secondary }}>
              No image content available for preview.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
