import type { TableProps } from "./types";

export default function Table<T extends Record<any, any>>({
  columns,
  rows,
  thead,
  theadTr,
  th,
  tbody,
  tbodyTr,
  td,
  ...props
}: TableProps<T>) {
  return (
    <table {...props} data-id='table'>
      <thead {...thead}>
        <tr {...theadTr}>
          {columns.map((column, index) => {
            const { children, ...thProps } = (
              typeof th === 'function' ?
                th(column, index) :
                th
            ) ?? {};
            return (
              <th
                key={String(column.key)}
                {...thProps}>
                {children !== undefined ? children : column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody {...tbody}>
        {rows.map((row, rowIndex) => {
          const trProps = typeof tbodyTr === 'function' ?
            tbodyTr(row, rowIndex) :
            tbodyTr;
          return (
            <tr
              key={row.id}
              {...trProps}>
              {columns.map(((column, columnIndex) => {
                const { children, ...tdProps } = (
                  typeof td === 'function' ?
                    td({
                      row,
                      column,
                      rowIndex,
                      columnIndex
                    }) :
                    td
                ) ?? {};
                return (
                  <td
                    key={String(column.key)}
                    {...tdProps}>
                    {children !== undefined ? children : (row[column.key] as any)}
                  </td>
                );
              }))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
