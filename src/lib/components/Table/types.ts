import type React from "react";
import type { StringNumber } from "../../types";
import type { ExcludeChildren, IncludeKey } from "../types";

export type Column<K extends StringNumber> = {
  title: React.ReactNode;
  index: K;
};

export type TrProps = ExcludeChildren<React.HTMLAttributes<HTMLTableRowElement>>;

export type TheadProps = ExcludeChildren<React.HTMLAttributes<HTMLTableSectionElement>>;
export type TbodyProps = ExcludeChildren<React.HTMLAttributes<HTMLTableSectionElement>>;

export type TheadTrProps = TrProps;
export type TbodyTrProps = IncludeKey<TrProps>;

export type ThProps = IncludeKey<React.ThHTMLAttributes<HTMLTableCellElement>>;
export type TdProps = IncludeKey<React.HTMLAttributes<HTMLTableCellElement>>;

export type TableProps<
  T extends Record<StringNumber, any>,
  K extends Extract<keyof T, StringNumber> = Extract<keyof T, StringNumber>
> = ExcludeChildren<React.TableHTMLAttributes<HTMLTableElement>> & {
  columns: Column<K>[];
  rows: T[];
  thead?: TheadProps;
  tbody?: TbodyProps;
  theadTr?: TheadTrProps;
  tbodyTr?: TbodyTrProps | ((row: T, index: number) => TbodyTrProps);
  th?: ThProps | ((column: Column<K>, index: number) => ThProps);
  td?: TdProps | ((data: {
    row: T;
    column: Column<K>;
    rowIndex: number;
    columnIndex: number;
  }) => TdProps);
}
