import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { spacing } from '../../theme/tokens/spacing';

export interface LogEntry {
  id: string | number;
  timestamp: string;
  level: string;
  message: string;
}

export interface TerminalViewerProps {
  logs: LogEntry[];
  emptyMessage?: string;
  bottomRef?: React.RefObject<HTMLDivElement>;
}

export const TerminalViewer: React.FC<TerminalViewerProps> = ({
  logs,
  emptyMessage = 'Waiting for logs...',
  bottomRef
}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: '100%',
        bgcolor: theme.palette.mode === 'dark'
          ? theme.palette.background.paper
          : (theme.palette as any).neutral?.[900] || '#0d1117',
        color: theme.palette.mode === 'dark'
          ? theme.palette.text.primary
          : (theme.palette as any).neutral?.[50] || '#c9d1d9',
        p: spacing.md,
        overflow: 'auto',
        fontFamily: (theme.typography as any).code?.fontFamily || 'monospace',
        fontSize: (theme.typography as any).code?.fontSize || '0.875rem',
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      {logs.length === 0 && (
        <Typography sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
          {emptyMessage}
        </Typography>
      )}
      {logs.map((log) => (
        <Box key={log.id} sx={{ display: 'flex', gap: spacing.md, mb: spacing.xs }}>
          <Typography
            component="span"
            sx={{ color: 'text.secondary', minWidth: 90, opacity: 0.7 }}
          >
            {log.timestamp}
          </Typography>
          <Typography
            component="span"
            sx={{
              color:
                log.level === 'ERROR'
                  ? theme.palette.error.light
                  : log.level === 'WARN'
                    ? theme.palette.warning.light
                    : theme.palette.success.light,
              fontWeight: 'bold',
              minWidth: 60
            }}
          >
            {log.level}
          </Typography>
          <Typography component="span" sx={{ whiteSpace: 'pre-wrap', flex: 1 }}>
            {log.message}
          </Typography>
        </Box>
      ))}
      {bottomRef && <div ref={bottomRef} />}
    </Paper>
  );
};
