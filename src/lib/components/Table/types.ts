import type React from "react";
import type { ComProps, More, Union, WithClass, WithKeyChildClass, WithKeyClass } from "../../types";

export type Column<K extends Union.StringNumber> = {
  label: React.ReactNode;
  index: K;
};

export type TheadProps = WithClass<ComProps.Thead>;
export type TbodyProps = WithClass<ComProps.Tbody>;

export type TheadTrProps = WithClass<ComProps.Tr>;
export type TbodyTrProps = WithKeyClass<ComProps.Tr>;

export type ThProps = WithKeyChildClass<ComProps.Th>;
export type TdProps = WithKeyChildClass<ComProps.Td>;

export type TableProps<
  T extends Record<Union.StringNumber, any>,
  K extends Extract<keyof T, Union.StringNumber> = Extract<keyof T, Union.StringNumber>
> = WithClass<{
  columns: Column<K>[];
  rows: T[];
  thead?: TheadProps;
  tbody?: TbodyProps;
  theadTr?: TheadTrProps;
  tbodyTr?: TbodyTrProps | ((
    row: T,
    index: number,
  ) => TbodyTrProps);
  th?: ThProps | ((
    column: Column<K>,
    index: number,
  ) => ThProps);
  td?: TdProps | ((data: {
    row: T;
    column: Column<K>;
    rowIndex: number;
    columnIndex: number;
  }) => TdProps);
}> & More<ComProps.Table>;
