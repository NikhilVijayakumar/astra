import { FC } from 'react';
import { Box, Typography, Divider, useTheme as useMuiTheme } from '@mui/material';
import Markdown from 'react-markdown';
import { spacing } from '../../theme/tokens/spacing';

interface MdViewerProps {
  fileName: string;
  fileContent?: string;
}

export const MdViewer: FC<MdViewerProps> = ({ fileName, fileContent }) => {
  const muiTheme = useMuiTheme();
  const content = fileContent && fileContent.trim().length > 0 ? fileContent : '_No markdown content available for preview._';

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      p: spacing.xl,
      backgroundColor: muiTheme.palette.background.paper,
      color: muiTheme.palette.text.primary,
      overflowY: 'auto'
    }}>
      <Typography variant="h5" sx={{ mb: spacing.sm }}>
        {fileName}
      </Typography>
      <Divider sx={{ mb: spacing.md }} />
      
      <Box sx={{ 
        '& h1, & h2, & h3': { color: muiTheme.palette.primary.main, mt: spacing.md, mb: spacing.xs },
        '& p': { mb: spacing.sm, lineHeight: 1.6 },
        '& ul, & ol': { pl: spacing.lg, mb: spacing.sm },
        '& blockquote': { 
          borderLeft: `4px solid ${muiTheme.palette.primary.main}`, 
          pl: spacing.md, 
          py: '4px',
          my: spacing.md,
          backgroundColor: muiTheme.palette.action.hover,
          fontStyle: 'italic'
        },
        '& hr': { my: spacing.lg, opacity: 0.1 }
      }}>
        <Markdown>{content}</Markdown>
      </Box>
    </Box>
  );
};
