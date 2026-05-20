import type React from "react";
import type { TypeId } from "../../types";
import type { ExcludeChildren } from "../types";

export type Column<T> = {
  key: keyof T;
  title: React.ReactNode;
};
export type TheadProps = ExcludeChildren<React.HTMLAttributes<HTMLTableSectionElement>>;
export type TrProps = ExcludeChildren<React.HTMLAttributes<HTMLTableRowElement>>;
export type ThProps = React.ThHTMLAttributes<HTMLTableCellElement>;
export type TBodyProps = ExcludeChildren<React.HTMLAttributes<HTMLTableSectionElement>>;
export type TdProps = React.HTMLAttributes<HTMLTableCellElement>;
export type TableProps<T extends TypeId> = ExcludeChildren<React.TableHTMLAttributes<HTMLTableElement>> & {
  columns: Column<T>[];
  rows: T[];
  thead?: TheadProps;
  theadTr?: TrProps;
  th?: ThProps | ((column: Column<T>, index: number) => ThProps);
  tbody?: TBodyProps;
  tbodyTr?: TrProps | ((row: T, index: number) => TrProps);
  td?: TdProps | ((data: {
    row: T;
    column: Column<T>;
    rowIndex: number;
    columnIndex: number;
  }) => TdProps);
}
