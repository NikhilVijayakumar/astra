// src/common/components/LoadingSpinner.tsx

import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLanguage } from '../../localization/LanguageContext'; // To get loading message

/**
 * Renders a common loading spinner with a message.
 */
const LoadingSpinner: React.FC = () => {
  const { literal } = useLanguage(); // Access localized loading message

  return (
    <Box sx={{ p: 4, textAlign: 'center', mt: 8 }}>
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6">
        {literal.loading_message || 'Loading...'}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
