import type { Union } from "../types";
import type { Option } from "../components";

export function groupValue(options: Record<Union.StringSymbol, Option[]>) {
  return Reflect.ownKeys(options).map(key => ({
    group: key,
    value: options[key],
  }));
}
