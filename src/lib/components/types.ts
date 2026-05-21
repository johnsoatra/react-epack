import type React from "react";

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type PrefixSuffix = 'prefix' | 'suffix';
export type InputExcludedAttributes = 'id' | 'name' | 'prefix';
export type ExcludeChildren<T> = Omit<T, 'children'>;

export type IncludeKey<T> = T & {
  key?: React.Attributes['key'];
};
