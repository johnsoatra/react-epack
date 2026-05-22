import type { SelectProps } from "./types";
import Icon from "../Icon/Icon";

export default function Select({
  pack: {
    options,
    option,
    prefix,
    suffix,
    container,
  },
  ...props
}: SelectProps) {
  return (
    <div {...container} data-re-c-select="">
      {prefix && <Icon {...prefix} />}
      <select {...props} data-re-select="">
        {options.map((data, index) => {
          const { key, value, children, ...optionProps } = (
            typeof option === 'function' ?
              option(data, index) :
              option
          ) ?? {};
          return (
            <option
              key={key ?? index}
              {...optionProps}
              value={value ?? data.value}
              data-re-option="">
              {children !== undefined ? children : data.label}
            </option>
          );
        })}
      </select>
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
