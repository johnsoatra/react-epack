import type { ComProps, More, WithClass } from "../../types";

export type PopoverProps = WithClass<{
  show: boolean;
  target: React.ReactNode;
  children: React.ReactNode;
  container?: WithClass<ComProps.Div>;
}> & More<ComProps.Div>;
