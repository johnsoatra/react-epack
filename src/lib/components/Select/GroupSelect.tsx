import type { Union } from "../../types";
import type { GroupSelectProps } from "./types";
import Icon from "../Icon/Icon";
import { groupValue } from "../../utils";

export default function GroupSelect<T extends Union.StringSymbol>({
  pack: {
    options,
    option,
    optgroup,
    prefix,
    suffix,
    container,
  },
  ...props
}: GroupSelectProps<T>) {
  return (
    <div {...container} data-re-c-group-select="">
      {prefix && <Icon {...prefix} />}
      <select {...props} data-re-select="">
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
              data-re-optgroup="">
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
                    data-re-option="">
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
