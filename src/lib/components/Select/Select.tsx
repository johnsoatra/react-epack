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
    <div {...container} data-re-c-select>
      {prefix && <Icon {...prefix} />}
      <select
        {...props}
        name={props.id}
        prefix={reactPrefix}
        data-re-select>
        {options.map((data, index) => {
          const { children, ...optionProps } = (
            typeof option === 'function' ?
              option(data, index) :
              option
          ) ?? {};
          return (
            <option
              key={data.value}
              {...optionProps}
              value={data.value}
              data-re-option>
              {children !== undefined ? children : data.label}
            </option>
          );
        })}
      </select>
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
