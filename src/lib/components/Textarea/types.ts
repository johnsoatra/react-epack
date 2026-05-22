import type { Affixes, ComProps, More, Union, WithClass } from "../../types";

export type TextareaProps = Affixes & WithClass<{
  id: string;
  reactPrefix?: string;
  container?: WithClass<ComProps.Div>;
}> & More<ComProps.Textarea, Union.IDName | 'prefix'>;
