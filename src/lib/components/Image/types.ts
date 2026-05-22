import type { ComProps, NoChild, Pack, Require } from "../../types";

export type ImageProps = Pack<
  Require<NoChild<ComProps.Img>, 'alt' | 'src'>,
  {}
>;
