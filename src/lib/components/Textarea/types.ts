import type { Affixes, ComProps, NoChild, Pack, Require } from "../../types";

export type TextareaProps = Pack<
  Require<NoChild<ComProps.Textarea>, 'id' | 'name'>,
  Affixes & {
    container?: NoChild<ComProps.Div>;
  }
>;
