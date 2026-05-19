import type { InputProps } from "../Input/types";
import type { LabelProps } from "../Label/types";
import type { DivProps, ExcludeChildren } from "../types";

export type SwitchProps = Omit<InputProps, 'type'> & {
  label?: ExcludeChildren<LabelProps>;
  slider?: ExcludeChildren<DivProps>;
  sliderBall?: ExcludeChildren<DivProps>;
};
