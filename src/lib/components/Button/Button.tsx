import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon";

export default function Button({
  type,
  children,
  pack: {
    prefix,
    suffix,
  } = {},
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type ?? 'button'}
      data-re-button="">
      {prefix && <Icon {...prefix} />}
      {children}
      {suffix && <Icon {...suffix} />}
    </button>
  );
}
