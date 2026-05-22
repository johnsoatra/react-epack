import type { Affixes, ComProps, Excludes, NoChild, Pack, Require } from "../../types";

export type InputProps = Pack<
  Require<NoChild<ComProps.Input>, 'id' | 'name'>,
  Affixes & {
    container?: NoChild<ComProps.Div>;
  }
>;

export type PasswordInputProps = Pack<
  Excludes<InputProps, 'type'>,
  {
    show?: boolean;
  }
>;
