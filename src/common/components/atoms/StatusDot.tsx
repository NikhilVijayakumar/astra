import { FC } from 'react';
import { Box, useTheme as useMuiTheme } from '@mui/material';

export type StatusDotTone = 'ok' | 'warning' | 'error' | 'executing' | 'waiting' | 'default';

export interface StatusDotProps {
  tone: StatusDotTone;
  size?: number;
}

const resolveStatusColor = (
  tone: StatusDotTone,
  successColor: string,
  warningColor: string,
  errorColor: string,
  infoColor: string,
  neutralColor: string,
): string => {
  if (tone === 'ok') return successColor;
  if (tone === 'warning' || tone === 'waiting') return warningColor;
  if (tone === 'error') return errorColor;
  if (tone === 'executing') return infoColor;
  return neutralColor;
};

export const StatusDot: FC<StatusDotProps> = ({ tone, size = 10 }) => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: resolveStatusColor(
          tone,
          muiTheme.palette.success.main,
          muiTheme.palette.warning.main,
          muiTheme.palette.error.main,
          muiTheme.palette.info.main,
          muiTheme.palette.text.secondary,
        ),
      }}
    />
  );
};
