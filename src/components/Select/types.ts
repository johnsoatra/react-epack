import type React from "react";
import type { IconProps } from "../Icon/Icon";
import type { DivProps, InputExcludedAttributes } from "../types";

export type Option = {
  label: React.ReactNode;
  value: any;
}
export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;
export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, InputExcludedAttributes> & {
  id: string;
  container?: DivProps;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
  options?: Option[];
  option: OptionProps | ((option: Option) => OptionProps);
};
