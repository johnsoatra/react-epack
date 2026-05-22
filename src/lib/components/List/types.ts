import type { ComProps, NoChild, Pack, WithKey } from "../../types";

type _LiProps = WithKey<ComProps.Li>;

export type ListProps<T> = Pack<
  NoChild<ComProps.Ul>,
  {
    data: T[];
    li?: _LiProps | ((
      item: T,
      index: number,
    ) => _LiProps);
  }
>;

export type OrderListProps<T> = Pack<
  NoChild<ComProps.Ol>,
  {
    data: T[];
    li?: _LiProps | ((
      item: T,
      index: number,
    ) => _LiProps);
  }
>;
