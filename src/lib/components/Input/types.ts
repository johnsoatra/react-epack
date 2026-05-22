import type { Affixes, ComProps, Excludes, More, Union, WithClass } from "../../types";

export type InputProps = Affixes & WithClass<{
  id: string;
  type?: ComProps.Input['type'];
  reactPrefix?: string;
  container?: WithClass<ComProps.Div>;
}> & More<ComProps.Input, Union.IDName | 'prefix' | 'type'>;

export type PasswordInputProps = Excludes<InputProps, 'type'> & {
  show?: boolean;
};
