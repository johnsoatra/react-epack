import type { Affixes, ComProps, Excludes, NoChild, Pack } from "../../types";

export type InputProps = Pack<
  NoChild<ComProps.Input>,
  Affixes & {
    container: ComProps.Div;
  }
>;

export type PasswordInputProps = Pack<
  Excludes<InputProps, 'type'>,
  {
    show: boolean;
  }
>;
