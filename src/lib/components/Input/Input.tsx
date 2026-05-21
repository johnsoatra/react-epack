import type { InputProps } from "./types";
import Icon from "../Icon/Icon";

export default function Input({
  id,
  container,
  reactPrefix,
  prefix,
  suffix,
  ...props
}: InputProps) {
  return (
    <div {...container} data-re-c-input="">
      {prefix && <Icon {...prefix} />}
      <input {...props} id={id} name={id} prefix={reactPrefix} data-re-input="" />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
