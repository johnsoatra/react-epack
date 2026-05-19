import type { InfoCardProps } from "./types";
import Card from "./Card";
import Icon from "../Icon/Icon";

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
