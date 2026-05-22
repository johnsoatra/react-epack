import type { ComProps, NoChild, Pack } from "../../types";

export type PopoverProps = Pack<
  ComProps.Div,
  {
    show: boolean;
    target: React.ReactNode;
    container?: NoChild<ComProps.Div>;
  }
>;
