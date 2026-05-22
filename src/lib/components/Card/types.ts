import type React from "react";
import type { ComProps, More, NoChild, WithClass } from "../../types";
import type { IconProps } from "../Icon/types";

export type CardProps = WithClass<{
  children: React.ReactNode;
}> & More<ComProps.Div>;

export type InfoCardProps = Exclude<NoChild<CardProps>, 'title'> & {
  htmlTitle?: string;
  icon: IconProps;
  title: React.ReactNode;
  description: React.ReactNode;
  info?: WithClass<ComProps.Div>;
  suffix?: IconProps;
};
