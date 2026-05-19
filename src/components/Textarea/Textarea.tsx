import type React from "react";
import type { DivProps, InputExcludedAttributes } from "../types";
import type { IconProps } from "../Icon/Icon";
import Icon from "../Icon/Icon";

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, InputExcludedAttributes> & {
  id: string;
  container?: DivProps;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};

export default function Textarea({
  container,
  reactPrefix,
  prefix,
  suffix,
  ...props
}: TextareaProps) {
  return (
    <div {...container} data-id="div-textarea">
      {prefix && <Icon {...prefix} />}
      <textarea {...props} name={props.id} prefix={reactPrefix} />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
