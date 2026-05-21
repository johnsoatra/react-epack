import type { StringSymbol } from "../../types";
import type { GroupSelectProps } from "./types";
import Icon from "../Icon/Icon";
import { groupValue } from "../../utils";

export default function GroupSelect<T extends StringSymbol>({
  container,
  reactPrefix,
  prefix,
  suffix,
  options,
  option,
  optgroup,
  ...props
}: GroupSelectProps<T>) {
  return (
    <div {...container} data-re-c-group-select>
      {prefix && <Icon {...prefix} />}
      <select
        {...props}
        name={props.id}
        prefix={reactPrefix}
        data-re-select>
        {groupValue(options).map(({ group, value }, groupIndex) => {
          const { key, label, ...optgroupProps } = (
            typeof optgroup === 'function' ?
              optgroup(group as T, groupIndex) :
              optgroup
          ) ?? {};
          return (
            <optgroup
              key={key ?? groupIndex}
              label={label ?? String(group)}
              {...optgroupProps}
              data-re-optgroup>
              {value.map((data, optionIndex) => {
                const { key, value, children, ...optionProps } = (
                  typeof option === 'function' ?
                    option({
                      group: group as T,
                      option: data,
                      groupIndex,
                      optionIndex,
                    }) :
                    option
                ) ?? {};
                return (
                  <option
                    key={key ?? optionIndex}
                    {...optionProps}
                    value={value ?? data.value}
                    data-re-option>
                    {children !== undefined ? children : data.label}
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
