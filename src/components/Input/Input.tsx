import type React from "react";
import type { DivProps, InputExcludedAttributes } from "../types";
import type { IconProps } from "../Icon/Icon";
import Icon from "../Icon/Icon";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, InputExcludedAttributes> & {
  id: string;
  container?: DivProps;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};

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
