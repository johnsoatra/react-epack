import type { InputProps } from "../Input/types";
import type { LabelProps } from "../Label/types";
import type { DivProps, ExcludeChildren, PrefixSuffix } from "../types";

export type SwitchProps = Omit<InputProps, 'type' | PrefixSuffix> & {
  label?: ExcludeChildren<Exclude<LabelProps, 'htmlFor'>>;
  slider?: ExcludeChildren<DivProps>;
  sliderBall?: ExcludeChildren<DivProps>;
};
