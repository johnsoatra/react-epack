import type React from "react";
import type { Affixes, ComProps, More, NoChild, WithClass } from "../../types";
import type { IconProps } from "../Icon";

export type ButtonProps = Affixes & WithClass<{
  type?: ComProps.Button['type'];
  reactPrefix?: string;
  children?: React.ReactNode;
}> & More<ComProps.Button, 'type' | 'prefix'>;

export type IconButtonProps = NoChild<ButtonProps> & {
  icon: IconProps;
}
