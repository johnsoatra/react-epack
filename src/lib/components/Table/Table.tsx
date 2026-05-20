import type { TypeId } from "../../../types";
import type { TableProps } from "./types";

export default function Table<T extends TypeId>({
  thead,
  theadTr,
  th,
  tbody,
  tbodyTr,
  td,
  columns,
  rows,
  renderCell,
  ...props
}: TableProps<T>) {
  return (
    <table {...props} data-id='table'>
      <thead {...thead}>
        <tr {...theadTr}>
          {columns.map(column =>
            <th
              key={String(column.key)}
              {...(typeof th === 'function' ? th(column) : th)}>
              {column.title}
            </th>
          )}
        </tr>
      </thead>
      <tbody {...tbody}>
        {rows.map(row =>
          <tr
            key={row.id}
            {...(typeof tbodyTr === 'function' ? tbodyTr(row) : tbodyTr)}>
            {columns.map((column) =>
              <td
                key={String(column.key)}
                {...(typeof td === 'function' ? td(row, column) : td)}>
                {renderCell ?
                  renderCell({ row, column }) :
                  row[column.key] as any
                }
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}
