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
  className,
  more,
}: InfoCardProps) {
  return (
    <Card
      more={{ ...more, title: htmlTitle }}
      className={className}>
      <Icon {...icon} />
      <div {...info} data-re-info="">
        {title}
        {description}
      </div>
      {suffix && <Icon {...suffix} />}
    </Card>
  );
}
