import type { ComProps, More, WithClass } from "../../types";

export type LineProps = WithClass<{
  orientation?: 'vertical' | 'horizontal';
}> & More<ComProps.Div>;
