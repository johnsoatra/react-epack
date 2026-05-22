import type { ComProps, Excludes, NoChild, Pack, Require } from "../../types";

export type SwitchProps = Pack<
  Require<Excludes<NoChild<ComProps.Input>, 'type'>, 'id' | 'name'>,
  {
    label?: Excludes<NoChild<ComProps.Label>, 'htmlFor'>;
    slider?: NoChild<ComProps.Div>;
    sliderBall?: ComProps.Div;
  }
>;
