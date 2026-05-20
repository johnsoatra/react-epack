import type React from "react";
import type { DivProps, ExcludeChildren, InputExcludedAttributes } from "../types";
import type { IconProps } from "../Icon/types";

export type Option = {
  label: React.ReactNode;
  value: any;
}
export type OptionProps = ExcludeChildren<
  Omit<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    'value'
  >
>;
export type SelectProps = ExcludeChildren<
  Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    InputExcludedAttributes
  >
> & {
  id: string;
  options: Option[];
  option?: OptionProps | ((option: Option) => OptionProps);
  container?: ExcludeChildren<DivProps>;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};
