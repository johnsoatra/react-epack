import type { TextareaProps } from "./types";
import Icon from "../Icon/Icon";

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
