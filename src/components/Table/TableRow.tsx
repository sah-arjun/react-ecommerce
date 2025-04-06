import { Row } from "../../types/table"

export const TableRow = <T extends object>({ columns, row }: Row<T>) => {
    return(
        <tr>
            {columns.map(col => (
                <td key={col.key as string} style={{ padding: '8px'}}>
                    {String(row[col.key])}
                </td>
            ))}
        </tr>
    )
}