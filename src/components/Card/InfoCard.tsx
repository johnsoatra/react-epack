import type { InfoCardProps } from "./types";
import Card from "./Card";
import Icon from "../Icon/Icon";

export default function InfoCard({
  htmlTitle,
  icon,
  title,
  description,
  info,
  suffix,
  ...props
}: InfoCardProps) {
  return (
    <Card {...props} title={htmlTitle}>
      <Icon {...icon} />
      <div {...info}>
        {title}
        {description}
      </div>
      {suffix && <Icon {...suffix} />}
    </Card>
  );
}
