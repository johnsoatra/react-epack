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

export type Pack<T, P> = Omit<T, 'pack'> & {
  pack?: Partial<(
    T extends { pack: any } ?
    T['pack'] :
    {}
  ) & P>;
};

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
