import type React from "react";
import type { DivProps, ExcludeChildren, InputExcludedAttributes } from "../types";
import type { IconProps } from "../Icon/types";

export type InputProps = ExcludeChildren<
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    InputExcludedAttributes
  >
> & {
  id: string;
  container?: ExcludeChildren<DivProps>;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};
export type PasswordInputProps = Omit<InputProps, 'type'> & {
  show?: boolean;
};
