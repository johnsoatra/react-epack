import type { Option, Union } from "../types";

export function groupValue(options: Record<Union.StringSymbol, Option[]>) {
  return Reflect.ownKeys(options).map(key => ({
    group: key,
    value: options[key],
  }));
}
