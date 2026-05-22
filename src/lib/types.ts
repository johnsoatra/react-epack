import type React from "react";
import type { IconProps } from "./components";

export type Excludes<T, K extends keyof NonNullable<T>> = Omit<T, K>;

export type OneOf<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, never>>;
}[keyof T];

export type More<
  T,
  K extends keyof (
    T extends { more?: any } ?
    NonNullable<T['more']> :
    T
  ) | undefined = undefined
> = T extends { more?: any } ? (
  Omit<T, 'more'> & {
    more?: K extends undefined ? NonNullable<T['more']> : Omit<NonNullable<T['more']>, NonNullable<K>>;
  }
) : {
  more?: K extends undefined ? T : Omit<T, NonNullable<K>>;
};

export namespace Union {
  export type StringNumber = string | number;
  export type StringSymbol = string | symbol;
  export type PrefixSuffix = 'prefix' | 'suffix';
  export type IDName = 'id' | 'name';
  export type KeyChildClass = 'key' | 'children' | 'className';
}

export namespace ComProps {
  export type Div = Excludes<React.ComponentProps<'div'>, Union.KeyChildClass>;
  export type Svg = Excludes<React.ComponentProps<'svg'>, Union.KeyChildClass>;
  export type Img = Excludes<React.ComponentProps<'img'>, Union.KeyChildClass>;
  export type Button = Excludes<React.ComponentProps<'button'>, Union.KeyChildClass>;
  export type Label = Excludes<React.ComponentProps<'label'>, Union.KeyChildClass>;
  export type Input = Excludes<React.ComponentProps<'input'>, Union.KeyChildClass>;
  export type Textarea = Excludes<React.ComponentProps<'textarea'>, Union.KeyChildClass>;
  export type Select = Excludes<React.ComponentProps<'select'>, Union.KeyChildClass>;
  export type Optgroup = Excludes<React.ComponentProps<'optgroup'>, Union.KeyChildClass>;
  export type Option = Excludes<React.ComponentProps<'option'>, Union.KeyChildClass>;
  export type Ul = Excludes<React.ComponentProps<'ul'>, Union.KeyChildClass>;
  export type Ol = Excludes<React.ComponentProps<'ol'>, Union.KeyChildClass>;
  export type Li = Excludes<React.ComponentProps<'li'>, Union.KeyChildClass>;
  export type Table = Excludes<React.ComponentProps<'table'>, Union.KeyChildClass>;
  export type Thead = Excludes<React.ComponentProps<'thead'>, Union.KeyChildClass>;
  export type Tbody = Excludes<React.ComponentProps<'tbody'>, Union.KeyChildClass>;
  export type Tr = Excludes<React.ComponentProps<'tr'>, Union.KeyChildClass>;
  export type Th = Excludes<React.ComponentProps<'th'>, Union.KeyChildClass>;
  export type Td = Excludes<React.ComponentProps<'td'>, Union.KeyChildClass>;
}

export type Affixes = {
  [K in Union.PrefixSuffix]?: IconProps;
};

export type WithKey<T> = T & {
  key?: React.Attributes['key'];
}

export type WithChild<T> = T & {
  children?: React.ReactNode;
}

export type WithClass<T> = T & {
  className?: string;
}

export type WithKeyChild<T> = WithKey<WithChild<T>>;

export type WithChildClass<T> = WithChild<WithClass<T>>;

export type WithKeyClass<T> = WithKey<WithClass<T>>;

export type WithKeyChildClass<T> = WithKey<WithChild<WithClass<T>>>;

export type NoChild<T extends { children?: any }> = Omit<T, 'children'>;
