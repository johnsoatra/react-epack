import type { ComProps, More, WithClass } from "../../types";

export type SvgProps = WithClass<{
  name: string,
  reactName?: string;
}> & More<ComProps.Svg, 'name'>;
