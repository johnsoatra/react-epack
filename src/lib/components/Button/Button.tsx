import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon";

export default function Button({
  pack: {
    prefix,
    suffix,
  } = {},
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={props.type ?? 'button'}
      data-re-button="">
      {prefix && <Icon {...prefix} />}
      {props.children}
      {suffix && <Icon {...suffix} />}
    </button>
  );
}
