import type { TextareaProps } from "./types";
import Icon from "../Icon/Icon";

export default function Textarea({
  id,
  container,
  reactPrefix,
  prefix,
  suffix,
  className,
  more,
}: TextareaProps) {
  return (
    <div {...container} data-re-c-textarea="">
      {prefix && <Icon {...prefix} />}
      <textarea
        {...more}
        id={id}
        name={id}
        prefix={reactPrefix}
        className={className}
        data-re-textarea=""
      />
      {suffix && <Icon {...suffix} />}
    </div>
  );
}
