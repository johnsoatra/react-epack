import type { ComProps, Excludes, More, Union, WithChildClass, WithClass } from "../../types";

export type SwitchProps = WithClass<{
  htmlId?: string;
  id: string;
  input?: Excludes<WithClass<ComProps.Input>, Union.IDName | 'type'>;
  slider?: WithClass<ComProps.Div>;
  sliderBall?: WithChildClass<ComProps.Div>;
}> & More<ComProps.Label, 'htmlFor' | 'id'>;
