import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon";

export default function Button({
  type,
  reactPrefix,
  prefix,
  suffix,
  children,
  className,
  more,
}: ButtonProps) {
  return (
    <button
      {...more}
      type={type ?? 'button'}
      prefix={reactPrefix}
      className={className}
      data-re-button="">
      {prefix && <Icon {...prefix} />}
      {children}
      {suffix && <Icon {...suffix} />}
    </button>
  );
}
