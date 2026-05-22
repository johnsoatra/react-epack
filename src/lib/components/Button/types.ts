import type { Affixes, ComProps, NoChild, Pack } from "../../types";
import type { IconProps } from "../Icon";

export type ButtonProps = Pack<
  ComProps.Button,
  Affixes
>;

export type IconButtonProps = Pack<
  NoChild<ButtonProps>,
  {
    icon: IconProps;
  }
>;

