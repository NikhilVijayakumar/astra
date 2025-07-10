// src/common/components/EmptyState.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../../localization/LanguageContext';
/**
 * Props for EmptyState component.
 */
interface EmptyStateProps {
  message?: string; // Specific empty message to display
}

/**
 * Renders a common message for when no content is available.
 */
const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  const { literal } = useLanguage(); // Access localized empty message

  return (
    <Box sx={{ p: 4, textAlign: 'center', mt: 8 }}>
      <Typography variant="h6">
        {message || literal.no_content_message || 'No content available.'}
      </Typography>
    </Box>
  );
};

export default EmptyState;
