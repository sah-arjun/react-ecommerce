import { useMemo, useState } from "react"
import { SortConfig, TableProps } from "../../types/table"
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TablePagination } from "./TablePagination";

export const Table = <T extends object>({
    data,
    columns,
    rowsPerPage,
    onRowClick
}: TableProps<T>) => {
    const[sortConfig, setSortConfig] = useState<SortConfig | null>(null);
    const[currentPage, setCurrentPage] = useState(1);

    const onSort = (key: string) => {
        const direction = sortConfig?.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    }

    // Sorting column/header
    const sortedData = useMemo(() => {
        if(!sortConfig) return data;

        const sortedArray = [...data].sort((a, b) => {
            const aValue = a[sortConfig.key as keyof T];
            const bValue = b[sortConfig.key as keyof T];
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortConfig.direction === 'asc'
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
            }

            return 0;
        });

        return sortedArray;
    }, [data, sortConfig]);

    const paginatedData = useMemo(() => {
        const startIdx = (currentPage - 1) * rowsPerPage;
        const endIdx = startIdx + rowsPerPage;
        return sortedData.slice(startIdx, endIdx);
    }, [sortedData, currentPage, rowsPerPage]);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(sortedData.length/rowsPerPage);

    return(
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse'}}>
                <TableHeader columns={columns} sortConfig={sortConfig} onSort={onSort}/>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <TableRow key={index} columns={columns} row={row} onRowClick={onRowClick}/>
                    ))}
                </tbody>
            </table>
            <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    )
}