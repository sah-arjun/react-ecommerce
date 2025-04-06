export interface Column<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
    width?: string;
}

export interface Row<T> {
    columns: Column<T>[];
    row: T;
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    rowsPerPage: number;
}

export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

export interface Pagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface TableHeaderProps<T> {
    columns: Column<T>[];
    sortConfig: SortConfig | null;
    onSort: (key: string) => void;
}
