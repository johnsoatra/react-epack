import type { ExcludeChildren } from "../types";

export type LIProps = React.HTMLAttributes<HTMLLIElement> & {
  key?: React.Attributes['key'];
};
export type ListProps<T> = ExcludeChildren<React.HTMLAttributes<HTMLUListElement>> & {
  data: T[];
  li?: LIProps | ((item: T, index: number) => LIProps);
};
