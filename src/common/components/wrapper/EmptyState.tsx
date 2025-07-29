// src/common/components/EmptyState.tsx



import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../../localization/LanguageContext';



/**
 * Renders a common, localized message for when no content is available.
 * It always uses the 'no_content_message' key from the LanguageContext.
 */
const EmptyState: React.FC = () => {
  // Access the localized strings from the context
  const { literal } = useLanguage();

  return (
    <Box sx={{ p: 4, textAlign: 'center', mt: 8 }}>
      <Typography variant="h6">
        {/* Always display the localized message from the context */}
        {literal.no_data_found}
      </Typography>
    </Box>
  );
};

export default EmptyState;

