import { FC } from "react";
import { Box, Typography, useTheme as useMuiTheme } from "@mui/material";
import { spacing } from "../../../theme/tokens/spacing";

export type MetricTrend = "up" | "down" | "neutral";

export interface TrendMetricCardProps {
  label: string;
  value: string | number;
  trendValue?: string;
  trend?: MetricTrend;
}

const resolveTrendColor = (
  trend: MetricTrend | undefined,
  successColor: string,
  errorColor: string,
  neutralColor: string,
): string => {
  if (trend === "up") return successColor;
  if (trend === "down") return errorColor;
  return neutralColor;
};

export const TrendMetricCard: FC<TrendMetricCardProps> = ({
  label,
  value,
  trendValue,
  trend,
}) => {
  const muiTheme = useMuiTheme();

  return (
    <Box
      sx={{
        flex: 1,
        p: spacing.md,
        backgroundColor: muiTheme.palette.background.paper,
        border: 1,
        borderColor: "divider",
        borderRadius: spacing.xs,
      }}
    >
      <Typography
        variant="micro"
        sx={{ color: muiTheme.palette.text.secondary }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: spacing.sm,
          mt: spacing.xs,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: muiTheme.palette.text.primary,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value}
        </Typography>
        {!!trendValue && (
          <Typography
            variant="captionBold"
            sx={{
              color: resolveTrendColor(
                trend,
                muiTheme.palette.success.main,
                muiTheme.palette.error.main,
                muiTheme.palette.text.secondary,
              ),
            }}
          >
            {trendValue}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
