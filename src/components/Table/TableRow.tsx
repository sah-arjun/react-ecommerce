import { Row } from "../../types/table"

export const TableRow = <T extends object>({ columns, row, onRowClick }: Row<T>) => {
    return(
        <tr
            onClick={() => onRowClick?.(row)}
            style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
        >
            {columns.map(col => (
                <td key={col.key as string} style={{ padding: '8px'}}>
                    {col.key === 'thumbnail' ? (
                        <img
                            src={row[col.key] as string}
                            alt="Thumnail"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                    ) : (
                        String(row[col.key]) // Default case for text-based columns
                    )}
                </td>
            ))}
        </tr>
    )
}