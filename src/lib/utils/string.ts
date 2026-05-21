import type { Option } from "../components";
import type { StringSymbol } from "../types";

export function groupValue(options: Record<StringSymbol, Option[]>) {
  return Reflect.ownKeys(options).map(key => ({
    group: key,
    value: options[key],
  }));
}
