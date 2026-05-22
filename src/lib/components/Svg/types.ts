import type { ComProps, NoChild, Pack } from "../../types";

export type SvgProps = Pack<
  NoChild<ComProps.Svg>,
  {
    name: string;
  }
>;
