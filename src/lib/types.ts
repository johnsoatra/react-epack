import type React from "react";
import type { IconProps } from "./components";

namespace Internal {
  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
  }[keyof T];

  export type OptionalProp<T, K extends string> = RequiredKeys<T> extends never ?
    {
      [P in K]?: T | undefined;
    } :
    {
      [P in K]: T;
    };
}

export type Affixes = {
  [K in Union.PrefixSuffix]?: IconProps;
};

export type Option = {
  label: React.ReactNode;
  value: any;
}

export type Column<K extends Union.StringNumber> = {
  label: React.ReactNode;
  index: K;
};

export type Excludes<T, K extends keyof NonNullable<T>> = Omit<T, K>;

export type Require<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: Required<T[P]>;
}

export type OneOf<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, never>>;
}[keyof T];

export type WithKey<T> = T & {
  key?: React.Attributes['key'];
}

export type NoChild<T extends { children?: any }> = Omit<T, 'children'>;

export type Pack<T, P> = Omit<T, 'pack'> & Internal.OptionalProp<
  (T extends { pack: any } ? Omit<T['pack'], keyof P> : {}) & P,
  'pack'
>;

export namespace Union {
  export type StringNumber = string | number;
  export type StringSymbol = string | symbol;
  export type PrefixSuffix = 'prefix' | 'suffix';
  export type IDName = 'id' | 'name';
  export type Key = 'key';
}

export namespace ComProps {
  export type Div = Excludes<React.ComponentProps<'div'>, Union.Key>;
  export type Svg = Excludes<React.ComponentProps<'svg'>, Union.Key>;
  export type Img = Excludes<React.ComponentProps<'img'>, Union.Key>;
  export type Button = Excludes<React.ComponentProps<'button'>, Union.Key>;
  export type Label = Excludes<React.ComponentProps<'label'>, Union.Key>;
  export type Input = Excludes<React.ComponentProps<'input'>, Union.Key>;
  export type Textarea = Excludes<React.ComponentProps<'textarea'>, Union.Key>;
  export type Select = Excludes<React.ComponentProps<'select'>, Union.Key>;
  export type Optgroup = Excludes<React.ComponentProps<'optgroup'>, Union.Key>;
  export type Option = Excludes<React.ComponentProps<'option'>, Union.Key>;
  export type Ul = Excludes<React.ComponentProps<'ul'>, Union.Key>;
  export type Ol = Excludes<React.ComponentProps<'ol'>, Union.Key>;
  export type Li = Excludes<React.ComponentProps<'li'>, Union.Key>;
  export type Table = Excludes<React.ComponentProps<'table'>, Union.Key>;
  export type Thead = Excludes<React.ComponentProps<'thead'>, Union.Key>;
  export type Tbody = Excludes<React.ComponentProps<'tbody'>, Union.Key>;
  export type Tr = Excludes<React.ComponentProps<'tr'>, Union.Key>;
  export type Th = Excludes<React.ComponentProps<'th'>, Union.Key>;
  export type Td = Excludes<React.ComponentProps<'td'>, Union.Key>;
}
