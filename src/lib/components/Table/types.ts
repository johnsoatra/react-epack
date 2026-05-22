import type { Column, ComProps, NoChild, Pack, Union, WithKey } from "../../types";

type _TheadProps = NoChild<ComProps.Thead>;
type _TbodyProps = NoChild<ComProps.Tbody>;

type _TheadTrProps = NoChild<ComProps.Tr>;
type _TbodyTrProps = WithKey<NoChild<ComProps.Tr>>;

type _ThProps = WithKey<ComProps.Th>;
type _TdProps = WithKey<ComProps.Td>;

export type TableProps<
  T extends Record<Union.StringNumber, any>,
  K extends Extract<keyof T, Union.StringNumber> = Extract<keyof T, Union.StringNumber>
> = Pack<
  NoChild<ComProps.Table>,
  {
    columns: Column<K>[];
    rows: T[];
    thead?: _TheadProps;
    tbody?: _TbodyProps;
    theadTr?: _TheadTrProps;
    tbodyTr?: _TbodyTrProps | ((
      row: T,
      index: number,
    ) => _TbodyTrProps);
    th?: _ThProps | ((
      column: Column<K>,
      index: number,
    ) => _ThProps);
    td?: _TdProps | ((data: {
      row: T;
      column: Column<K>;
      rowIndex: number;
      columnIndex: number;
    }) => _TdProps);
  }
>;
