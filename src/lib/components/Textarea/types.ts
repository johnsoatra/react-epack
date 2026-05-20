import type { IconProps } from "../Icon/types";
import type { DivProps, ExcludeChildren, InputExcludedAttributes } from "../types";

export type TextareaProps = ExcludeChildren<
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    InputExcludedAttributes
  >
> & {
  id: string;
  container?: ExcludeChildren<DivProps>;
  reactPrefix?: string;
  prefix?: IconProps;
  suffix?: IconProps;
};
