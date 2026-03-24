import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

export interface Column<T> {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
}

export const DataTable = <T extends Record<string, any>>({ columns, data, keyField }: DataTableProps<T>) => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
        }}
      >
        <Table stickyHeader aria-label="premium data table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 600 }}
                  sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={String(row[keyField])} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {columns.map((column) => {
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.render ? column.render(row) : row[column.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
