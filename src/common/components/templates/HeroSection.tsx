import { FC, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import { spacing } from "../../../theme/tokens/spacing";
import { colors } from "../../../theme/tokens/colors";

export interface HeroSectionProps {
  headline: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
  headline,
  description,
  primaryActionLabel,
  onPrimaryAction,
  children,
}) => {
  return (
    <Box
      sx={{
        py: spacing.xxl,
        px: spacing.xl,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: spacing.lg,
        maxWidth: "800px",
      }}
    >
      <Typography
        variant="h1"
        fontWeight={600}
        color="text.primary"
        sx={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
      >
        {headline}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "600px", lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      )}

      {primaryActionLabel && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onPrimaryAction}
          disableElevation
          sx={{
            backgroundColor: colors.primary,
            color: '#fff',
            borderRadius: 1,
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: colors.primaryHover,
            },
          }}
        >
          {primaryActionLabel}
        </Button>
      )}

      {children && <Box sx={{ mt: spacing.xs, width: "100%" }}>{children}</Box>}
    </Box>
  );
};
