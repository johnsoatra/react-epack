import type { ComProps, Excludes, NoChild, Pack } from "../../types";
import { type SvgList } from "../../config/types";

export type SvgProps = Pack<
  Excludes<NoChild<ComProps.Svg>, 'name'> & { name: keyof SvgList },
  {
    reactName?: string;
  }
>;
