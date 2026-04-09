import { FC, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useTheme as useMuiTheme,
  TablePagination,
} from "@mui/material";
import { spacing } from "../../../theme/tokens/spacing";

interface CsvViewerProps {
  fileName: string;
  fileContent?: string;
}

const parseCsv = (content: string): { headers: string[]; rows: string[][] } => {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) {
    return { headers: [], rows: [] };
  }

  const delimiter = lines[0].includes(";") ? ";" : ",";
  const headers = lines[0].split(delimiter).map((item) => item.trim());
  const rows = lines
    .slice(1)
    .map((line) => line.split(delimiter).map((item) => item.trim()));
  return { headers, rows };
};

export const CsvViewer: FC<CsvViewerProps> = ({ fileName, fileContent }) => {
  const muiTheme = useMuiTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const parsed = parseCsv(fileContent ?? "");
  const headers = parsed.headers;
  const rows = parsed.rows;

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: spacing.md,
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: spacing.md, color: muiTheme.palette.text.primary }}
      >
        {fileName}
      </Typography>

      {headers.length === 0 && (
        <Typography
          variant="body2"
          sx={{ mb: spacing.md, color: muiTheme.palette.text.secondary }}
        >
          No CSV content available for preview.
        </Typography>
      )}

      <TableContainer
        component={Paper}
        sx={{
          flexGrow: 1,
          backgroundColor: muiTheme.palette.background.default,
          border: `1px solid ${muiTheme.palette.divider}`,
        }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: muiTheme.palette.background.paper,
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow key={idx} hover>
                  {row.map((cell, cIdx) => (
                    <TableCell
                      key={cIdx}
                      sx={{ color: muiTheme.palette.text.secondary }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};
