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
              value={data.value}>
              {children !== undefined ? children : data.label}
            </option>
          );
        })}
      </select>
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
