import type { ComProps, NoChild, Pack } from "../../types";

export type LineProps = Pack<
  NoChild<ComProps.Div>,
  {
    orientation?: 'vertical' | 'horizontal';
  }
>;
