import { ReactNode } from 'react';
import { Box, Paper, Typography } from '@mui/material';

export interface CardProps {
  title?: string;
  supportingText?: string;
  children?: ReactNode;
  action?: ReactNode;
}

export const Card = ({ title, supportingText, children, action }: CardProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        borderRadius: '8px',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        
      }}
      
    >
      {(title || supportingText || action) && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            {title && (
              <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                {title}
              </Typography>
            )}
            {supportingText && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {supportingText}
              </Typography>
            )}
          </Box>
          {action && <Box>{action}</Box>}
        </Box>
      )}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Paper>
  );
};
