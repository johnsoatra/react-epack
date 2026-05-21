import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon";

export default function Button({
  type,
  reactPrefix,
  prefix,
  suffix,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props} type={type ?? 'button'} prefix={reactPrefix} data-re-button>
      {prefix && <Icon {...prefix} />}
      {children}
      {suffix && <Icon {...suffix} />}
    </button>
  );
}
