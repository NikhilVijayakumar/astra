// src/common/components/ErrorDisplay.tsx

import React from 'react';
import { Box, Alert } from '@mui/material';
import { useLanguage } from '../../localization/LanguageContext'; // To get unknown error message

interface ErrorDisplayProps {
  message?: string; // Specific error message to display
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  const { literal } = useLanguage(); // Access localized unknown message

  return (
    <Box sx={{ p: 4, textAlign: 'center', mt: 8 }}>
      <Alert severity="error">
        {message || literal.unknown_message || 'An unexpected error occurred.'}
      </Alert>
    </Box>
  );
};

export default ErrorDisplay;
