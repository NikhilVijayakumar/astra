import { FC } from "react";
import { Typography, useTheme as useMuiTheme } from "@mui/material";
import { spacing } from "../../../theme/tokens/spacing";

export type SeverityLevel =
  | "CRITICAL"
  | "WARNING"
  | "URGENT"
  | "INFO"
  | "SUCCESS";

export interface SeverityBadgeProps {
  level: SeverityLevel | string;
}

const resolveSeverityColor = (
  level: string,
  errorColor: string,
  warningColor: string,
  infoColor: string,
  successColor: string,
): string => {
  if (level === "CRITICAL") return errorColor;
  if (level === "WARNING" || level === "URGENT") return warningColor;
  if (level === "SUCCESS") return successColor;
  return infoColor;
};

const withAlphaSuffix = (color: string): string => `${color}20`;

export const SeverityBadge: FC<SeverityBadgeProps> = ({ level }) => {
  const muiTheme = useMuiTheme();
  const tone = resolveSeverityColor(
    level,
    muiTheme.palette.error.main,
    muiTheme.palette.warning.main,
    muiTheme.palette.info.main,
    muiTheme.palette.success.main,
  );

  return (
    <Typography
      variant="captionBold"
      sx={{
        px: spacing.sm,
        py: spacing.internal,
        borderRadius: spacing.internal,
        backgroundColor: withAlphaSuffix(tone),
        color: tone,
      }}
    >
      {level}
    </Typography>
  );
};
