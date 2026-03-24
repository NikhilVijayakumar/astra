import { FC, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

export interface HeroSectionProps {
  headline: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
  headline,
  description,
  primaryActionLabel,
  onPrimaryAction,
  children,
}) => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 3,
        maxWidth: '800px',
      }}
    >
      <Typography variant="h2" fontWeight={700} color="text.primary" sx={{ letterSpacing: '-0.02em' }}>
        {headline}
      </Typography>
      
      {description && (
        <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ maxWidth: '600px', lineHeight: 1.6 }}>
          {description}
        </Typography>
      )}

      {primaryActionLabel && (
        <Button variant="contained" color="primary" size="large" onClick={onPrimaryAction} disableElevation>
          {primaryActionLabel}
        </Button>
      )}

      {children && <Box sx={{ mt: 2, width: '100%' }}>{children}</Box>}
    </Box>
  );
};
