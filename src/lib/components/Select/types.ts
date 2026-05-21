import type React from "react";
import type { StringSymbol } from "../../types";
import type { DivProps, ExcludeChildren, IncludeKey, InputExcludedAttributes } from "../types";
import type { IconProps } from "../Icon/types";

export type Option = {
  label: React.ReactNode;
  value: any;
}
export type OptgroupProps = IncludeKey<ExcludeChildren<React.OptgroupHTMLAttributes<HTMLOptGroupElement>>>;
export type OptionProps = IncludeKey<React.OptionHTMLAttributes<HTMLOptionElement>>;
export type SelectProps = ExcludeChildren<
  Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    InputExcludedAttributes
  >
> & {
  id: string;
  options: Option[];
  option?: OptionProps | ((option: Option, index: number) => OptionProps);
  container?: ExcludeChildren<DivProps>;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};

export type GroupSelectProps<T extends StringSymbol> = ExcludeChildren<
  Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    InputExcludedAttributes
  >
> & {
  id: string;
  options: Record<T, Option[]>;
  optgroup?: OptgroupProps | ((
    group: T,
    index: number,
  ) => OptgroupProps);
  option?: OptionProps | ((data: {
    group: T;
    option: Option;
    groupIndex: number;
    optionIndex: number;
  }) => OptionProps);
  container?: ExcludeChildren<DivProps>;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};
