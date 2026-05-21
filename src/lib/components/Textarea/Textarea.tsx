import type { TextareaProps } from "./types";
import Icon from "../Icon/Icon";

export default function Textarea({
  id,
  container,
  reactPrefix,
  prefix,
  suffix,
  ...props
}: TextareaProps) {
  return (
    <div {...container} data-re-c-textarea>
      {prefix && <Icon {...prefix} />}
      <textarea {...props} name={id} prefix={reactPrefix} data-re-textarea />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
