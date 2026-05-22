import type { InputProps } from "./types";
import Icon from "../Icon/Icon";

export default function Input({
  type,
  id,
  container,
  reactPrefix,
  prefix,
  suffix,
  className,
  more,
}: InputProps) {
  return (
    <div {...container} data-re-c-input="">
      {prefix && <Icon {...prefix} />}
      <input
        {...more}
        id={id}
        name={id}
        type={type}
        prefix={reactPrefix}
        className={className}
        data-re-input=""
      />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
