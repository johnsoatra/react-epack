import type { InputProps } from "./types";
import Icon from "../Icon/Icon";

export default function Input({
  pack: {
    container,
    prefix,
    suffix,
  } = {},
  ...props
}: InputProps) {
  return (
    <div {...container} data-re-c-input="">
      {prefix && <Icon {...prefix} />}
      <input {...props} data-re-input="" />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
