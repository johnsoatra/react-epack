import type React from "react";
import type { Affixes, ComProps, Excludes, More, Union, WithClass, WithKeyChildClass, WithKeyClass } from "../../types";

export type Option = {
  label: React.ReactNode;
  value: any;
}

export type OptgroupProps = WithKeyClass<ComProps.Optgroup>;

export type OptionProps = WithKeyChildClass<ComProps.Option>;

export type SelectProps = Affixes & WithClass<{
  id: string;
  reactPrefix?: string;
  options: Option[];
  option?: OptionProps | ((
    option: Option,
    index: number,
  ) => OptionProps);
  container?: WithClass<ComProps.Div>;
}> & More<ComProps.Select, Union.IDName | 'prefix'>;

export type GroupSelectProps<T extends Union.StringSymbol> = Excludes<SelectProps, 'options' | 'option'> & {
  options: Record<T, Option[]>;
  option?: OptionProps | ((data: {
    group: T;
    option: Option;
    groupIndex: number;
    optionIndex: number;
  }) => OptionProps);
  optgroup?: OptgroupProps | ((
    group: T,
    index: number,
  ) => OptgroupProps);
}
