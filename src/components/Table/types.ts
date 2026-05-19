import type React from "react";
import type { TypeId } from "@/types";

export type Column<T> = {
  key: keyof T;
  title: React.ReactNode;
};
export type TheadProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type ThProps =   React.ThHTMLAttributes<HTMLTableCellElement>;
export type TBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TrProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TdProps = React.HTMLAttributes<HTMLTableDataCellElement>;
export type TableProps<T extends TypeId> = React.TableHTMLAttributes<HTMLTableElement> & {
  thead?: TheadProps;
  theadTr?: TrProps;
  th?: ThProps | ((column: Column<T>) => ThProps);
  tbody?: TBodyProps;
  tbodyTr?: TrProps | ((row: T) => TrProps);
  td?: TdProps | ((row: T, column: Column<T>) => TdProps);
  columns: Column<T>[];
  rows: T[];
  renderCell?: (data: {
    row: T,
    column: Column<T>,
  }) => React.ReactNode;
}
