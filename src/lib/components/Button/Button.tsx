import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon";

export default function Button({
  reactPrefix,
  prefix,
  suffix,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} prefix={reactPrefix} data-id="button">
      {prefix && <Icon {...prefix} />}
      {children}
      {suffix && <Icon {...suffix} />}
    </button>
  );
}
