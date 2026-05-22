import type { TextareaProps } from "./types";
import Icon from "../Icon/Icon";

export default function Textarea({
  pack: {
    prefix,
    suffix,
    container,
  } = {},
  ...props
}: TextareaProps) {
  return (
    <div {...container} data-re-c-textarea="">
      {prefix && <Icon {...prefix} />}
      <textarea {...props} data-re-textarea="" />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
