import type React from "react"
import type { CardProps } from "./Card"
import type { IconProps } from "../Icon/Icon"
import type { DivProps } from "../types";
import Card from "./Card";
import Icon from "../Icon/Icon";

export type InfoCardProps = Omit<CardProps, 'title'> & {
  htmlTitle?: string;
  icon: IconProps;
  title: React.ReactNode;
  description?: React.ReactNode;
  info?: DivProps;
};

export function InfoCard({
  htmlTitle,
  icon,
  title,
  description,
  info,
  ...props
}: InfoCardProps) {
  return (
    <Card {...props} title={htmlTitle}>
      <Icon {...icon} />
      <div {...info}>
        {title}
        {description}
      </div>
    </Card>
  );
}
