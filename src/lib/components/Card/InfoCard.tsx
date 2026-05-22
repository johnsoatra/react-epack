import type { InfoCardProps } from "./types";
import Card from "./Card";
import Icon from "../Icon/Icon";

export default function InfoCard({
  pack: {
    icon,
    title,
    description,
    info,
    suffix,
  },
  ...props
}: InfoCardProps) {
  return (
    <Card {...props}>
      {icon && <Icon {...icon} />}
      <div {...info} data-re-info="">
        {title}
        {description}
      </div>
      {suffix && <Icon {...suffix} />}
    </Card>
  );
}
