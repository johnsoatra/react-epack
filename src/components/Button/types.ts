import type React from "react";
import type { IconProps } from "../Icon/types";
import type { ExcludeChildren } from "../types";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> & {
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};
export type IconButtonProps = ExcludeChildren<ButtonProps> & {
  icon: IconProps,
};
