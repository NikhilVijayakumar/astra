import { FC } from "react";
import { Box, Typography, useTheme as useMuiTheme } from "@mui/material";
import { spacing } from "../../../theme/tokens/spacing";

export interface SummaryLine {
  text: string;
  variant?: "body2" | "caption";
}

export interface SummaryPanelProps {
  title: string;
  lines: SummaryLine[];
}

export const SummaryPanel: FC<SummaryPanelProps> = ({ title, lines }) => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      sx={{
        p: spacing.lg,
        border: 1,
        borderColor: "divider",
        borderRadius: spacing.xs,
        backgroundColor: muiTheme.palette.background.paper,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: muiTheme.palette.text.primary, mb: spacing.sm }}
      >
        {title}
      </Typography>

      {lines.map((line, index) => (
        <Typography
          key={`${line.text}-${index}`}
          variant={line.variant ?? "body2"}
          sx={{
            color: muiTheme.palette.text.secondary,
            display: line.variant === "caption" ? "block" : "inline",
          }}
        >
          {line.text}
        </Typography>
      ))}
    </Box>
  );
};
