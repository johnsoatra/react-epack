export type StringNumber = string | number;
export type StringSymbol = string | symbol;

export type OneOf<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, never>>;
}[keyof T];
