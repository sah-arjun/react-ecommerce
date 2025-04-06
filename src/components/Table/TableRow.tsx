import { Row } from "../../types/table"

export const TableRow = <T extends object>({ columns, row, onRowClick }: Row<T>) => {
    return(
        <tr
            onClick={() => onRowClick?.(row)}
            style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
        >
            {columns.map(col => (
                <td key={col.key as string} style={{ padding: '8px'}}>
                    {String(row[col.key])}
                </td>
            ))}
        </tr>
    )
}