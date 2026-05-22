import type { Affixes, ComProps, NoChild, Option, Pack, Require, Union, WithKey } from "../../types";

type _OptgroupProps = WithKey<NoChild<ComProps.Optgroup>>;

type _OptionProps = WithKey<ComProps.Option>;

export type SelectProps = Pack<
  Require<NoChild<ComProps.Select>, 'id' | 'name'>,
  Affixes & {
    options: Option[];
    option?: _OptionProps | ((
      option: Option,
      index: number,
    ) => _OptionProps);
    container?: NoChild<ComProps.Div>;
  }
>;

export type GroupSelectProps<T extends Union.StringSymbol> = Pack<
  SelectProps,
  {
    options: Record<T, Option[]>;
    option?: _OptionProps | ((data: {
      group: T;
      option: Option;
      groupIndex: number;
      optionIndex: number;
    }) => _OptionProps);
    optgroup?: _OptgroupProps | ((
      group: T,
      index: number,
    ) => _OptgroupProps);
  }
>;
