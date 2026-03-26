import { FC, ReactNode } from 'react';
import { Box, Button, Typography, useTheme as useMuiTheme } from '@mui/material';
import { spacing } from '../../theme/tokens/spacing';

export interface HeaderActionConfig {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  primaryAction?: HeaderActionConfig;
  secondaryAction?: HeaderActionConfig;
  leadingMeta?: ReactNode;
  trailingMeta?: ReactNode;
}

const renderAction = (action: HeaderActionConfig): ReactNode => (
  <Button
    variant={action.variant ?? 'outlined'}
    size={action.size ?? 'small'}
    onClick={action.onClick}
    disabled={action.disabled}
  >
    {action.label}
  </Button>
);

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  leadingMeta,
  trailingMeta,
}) => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: spacing.xl,
        gap: spacing.md,
        flexWrap: 'wrap',
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ color: muiTheme.palette.text.primary, mb: spacing.xs }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: muiTheme.palette.text.secondary }}>
            {subtitle}
          </Typography>
        )}
        {leadingMeta}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: spacing.md, flexWrap: 'wrap' }}>
        {trailingMeta}
        {secondaryAction && renderAction(secondaryAction)}
        {primaryAction && renderAction(primaryAction)}
      </Box>
    </Box>
  );
};
