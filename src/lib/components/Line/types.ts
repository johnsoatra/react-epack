import type { DivProps, ExcludeChildren } from "../types";

export type LineProps = ExcludeChildren<DivProps> & {
  orientation?: 'vertical' | 'horizontal';
};
