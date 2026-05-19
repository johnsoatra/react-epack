import type { InputProps } from "./types";
import Icon from "../Icon/Icon";

export default function Input({
  container,
  reactPrefix,
  prefix,
  suffix,
  ...props
}: InputProps) {
  return (
    <div {...container} data-id="div-input">
      {prefix && <Icon {...prefix} />}
      <input {...props} name={props.id} prefix={reactPrefix} />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
