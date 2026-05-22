import type { ComProps, More, WithClass, WithKeyChildClass } from "../../types";

export type LIProps = WithKeyChildClass<ComProps.Li>;

export type ListProps<T> = WithClass<{
  data: T[];
  li?: LIProps | ((
    item: T,
    index: number,
  ) => LIProps);
}> & More<ComProps.Ul>;

export type OrderListProps<T> = WithClass<{
  data: T[];
  li?: LIProps | ((
    item: T,
    index: number,
  ) => LIProps);
}> & More<ComProps.Ol>;
