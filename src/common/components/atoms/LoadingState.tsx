// src/common/components/LoadingState.tsx
import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useLanguage } from "../../localization/LanguageContext";
import { spacing } from "../../../theme/tokens/spacing";

const LoadingState: FC = () => {
  const { literal } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: spacing.lg,
        mt: spacing.xl,
      }}
    >
      <CircularProgress sx={{ mb: spacing.md, color: 'primary.main' }} />
      <Typography variant="body1" color="text.secondary">
        {literal.loading_message}
      </Typography>
    </Box>
  );
};

export default LoadingState;
