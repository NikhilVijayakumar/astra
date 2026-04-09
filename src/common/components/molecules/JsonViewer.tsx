import { FC } from "react";
import { Box, Typography, useTheme as useMuiTheme } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { spacing } from "../../../theme/tokens/spacing";

interface JsonViewerProps {
  fileName: string;
  fileContent?: string;
}

const normalizeJsonForDisplay = (
  fileName: string,
  fileContent?: string,
): string => {
  if (!fileContent || fileContent.trim().length === 0) {
    return JSON.stringify(
      { message: "No JSON content available for preview." },
      null,
      2,
    );
  }

  if (fileName.toLowerCase().endsWith(".jsonl")) {
    const lines = fileContent
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const objects = lines.map((line, index) => {
      try {
        return JSON.parse(line);
      } catch {
        return { line: index + 1, parseError: true, raw: line };
      }
    });

    return JSON.stringify(objects, null, 2);
  }

  try {
    return JSON.stringify(JSON.parse(fileContent), null, 2);
  } catch {
    return JSON.stringify({ parseError: true, raw: fileContent }, null, 2);
  }
};

export const JsonViewer: FC<JsonViewerProps> = ({ fileName, fileContent }) => {
  const muiTheme = useMuiTheme();
  const normalized = normalizeJsonForDisplay(fileName, fileContent);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: muiTheme.palette.background.default,
      }}
    >
      <Box
        sx={{
          p: spacing.sm,
          backgroundColor: muiTheme.palette.background.paper,
          borderBottom: `1px solid ${muiTheme.palette.divider}`,
        }}
      >
        <Typography variant="body2">{fileName}</Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: "auto", p: spacing.sm }}>
        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: spacing.md,
            borderRadius: "4px",
            fontSize: "12px",
            backgroundColor: muiTheme.palette.background.paper,
          }}
        >
          {normalized}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};
