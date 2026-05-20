import type { DivProps, ExcludeChildren } from "../types";

export type PopoverProps = ExcludeChildren<DivProps> & {
  show: boolean;
  target: React.ReactNode;
  children: React.ReactNode;
  container?: ExcludeChildren<DivProps>;
};
