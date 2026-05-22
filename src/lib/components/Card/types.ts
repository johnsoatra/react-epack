import type React from "react";
import type { ComProps, NoChild, Pack } from "../../types";
import type { IconProps } from "../Icon/types";

export type CardProps = Pack<
  ComProps.Div,
  {}
>;

export type InfoCardProps = Pack<
  NoChild<CardProps>,
  {
    icon: IconProps;
    title: React.ReactNode;
    description: React.ReactNode;
    info?: NoChild<ComProps.Div>;
    suffix?: IconProps;
  }
>;
