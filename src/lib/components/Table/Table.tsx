import type { StringNumber } from "../../types";
import type { TableProps } from "./types";

export default function Table<T extends Record<StringNumber, any>>({
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
            const { key, children, ...thProps } = (
              typeof th === 'function' ?
                th(column, index) :
                th
            ) ?? {};
            return (
              <th
                key={key ?? index}
                {...thProps}>
                {children !== undefined ? children : column.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody {...tbody}>
        {rows.map((row, rowIndex) => {
          const { key, ...trProps } = (
            typeof tbodyTr === 'function' ?
              tbodyTr(row, rowIndex) :
              tbodyTr
          ) ?? {};
          return (
            <tr
              key={key ?? rowIndex}
              {...trProps}>
              {columns.map(((column, columnIndex) => {
                const { key, children, ...tdProps } = (
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
                    key={key ?? columnIndex}
                    {...tdProps}>
                    {children !== undefined ? children : row[column.index]}
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
