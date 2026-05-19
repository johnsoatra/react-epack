import type React from "react";
import type { IconProps } from "../Icon/Icon";
import Icon from "../Icon/Icon";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> & {
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};

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
