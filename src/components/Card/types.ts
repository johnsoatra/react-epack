import type { IconProps } from "../Icon/types";
import type { DivProps, ExcludeChildren } from "../types";

export type CardProps = DivProps;
export type InfoCardProps = ExcludeChildren<Omit<CardProps, 'title'>> & {
  htmlTitle?: string;
  icon: IconProps;
  title: React.ReactNode;
  description?: React.ReactNode;
  info?: ExcludeChildren<DivProps>;
};