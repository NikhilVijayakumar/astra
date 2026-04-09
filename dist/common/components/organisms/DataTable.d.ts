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
export declare const DataTable: <T extends Record<string, any>>({ columns, data, keyField }: DataTableProps<T>) => import("react/jsx-runtime").JSX.Element;
