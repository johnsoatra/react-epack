import type { SelectProps } from "./types";
import Icon from "../Icon/Icon";

export default function Select({
  container,
  reactPrefix,
  prefix,
  suffix,
  options,
  option,
  ...props
}: SelectProps) {
  return (
    <div {...container} data-id="div-select">
      {prefix && <Icon {...prefix} />}
      <select
        {...props}
        name={props.id}
        prefix={reactPrefix}>
        {options?.map(data =>
          <option
            key={data.value}
            {...(typeof option === 'function' ? option(data) : option)}
            value={data.value}>
            {data.label}
          </option>
        )}
      </select>
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
