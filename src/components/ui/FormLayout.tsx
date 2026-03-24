import { FC } from 'react';
import { Box, Typography } from '@mui/material';

export interface FormLayoutProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const FormLayout: FC<FormLayoutProps> = ({ title, children, actions }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '600px' }}>
      {title && (
        <Typography variant="h5" fontWeight={600} color="text.primary">
          {title}
        </Typography>
      )}
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {children}
      </Box>

      {actions && (
        <Box sx={{ display: 'flex', gap: 2, mt: 2, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          {actions}
        </Box>
      )}
    </Box>
  );
};
