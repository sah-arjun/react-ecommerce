import { TableHeaderProps } from "../../types/table"

export const TableHeader = <T extends object>({ columns, sortConfig, onSort }: TableHeaderProps<T>) => {
    // Determine whether or not to display a sorting icon for each column header
    const getSortIcon = (key: string) => {
        if(!sortConfig) return null;
        if(sortConfig.key !== key) return null;
        return sortConfig.direction === 'asc' ? '↑' : '↓';
    };
    return(
        <thead>
            <tr>
                {columns.map(col => (
                <th
                    key={col.key as string}
                    onClick={() => col.sortable && onSort(col.key as string)}
                    style={{ cursor: col.sortable ? 'pointer' : 'default', width: col.width || 'auto' }}
                >
                    {col.label} {getSortIcon(col.key as string)}
                </th>
                ))}
            </tr>
        </thead>
    )
}