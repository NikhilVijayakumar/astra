// src/common/components/ErrorState.tsx

import React from 'react';
import { Box, Alert } from '@mui/material';
import { useLanguage } from '../../localization/LanguageContext';

/**
 * Defines the props for the ErrorState component.
 */
interface ErrorStateProps {
  /**
   * The optional error message to display.
   * If not provided, the component will use a default message
   * from the localization context.
   */
  message?: string;
}

/**
 * `ErrorState` is a reusable UI component that shows a prominent error message.
 *
 * It uses Material-UI's `Alert` component with `severity="error"` to ensure a
 * consistent and accessible presentation of errors. It displays a custom `message`
 * from props or falls back to a generic, localized error message from `useLanguage()`.
 *
 * ⚠️ Note: If both the `message` prop and the localized `unknown_message` are
 * unavailable, the alert box will be rendered without any text content.
 *
 * @component
 * @param {ErrorStateProps} props - The props for the component.
 * @returns {React.ReactElement} A React element containing the styled error alert.
 *
 * @example
 * // Displaying a specific error message
 * <ErrorState message="Network connection failed. Please try again." />
 *
 * @example
 * // Displaying a generic, localized error
 * <ErrorState />
 */
const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  const { literal } = useLanguage();

  // Determine the final message to display.
  // 1. Use the provided message prop.
  // 2. Fall back to the localized "unknown_message".
  const finalMessage = message || literal.unknown_message;

  return (
    <Box sx={{ p: 4, textAlign: 'center', mt: 8 }}>
      <Alert severity="error">{finalMessage}</Alert>
    </Box>
  );
};

export default ErrorState;