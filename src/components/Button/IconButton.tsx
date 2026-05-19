import type { IconButtonProps } from "./types";
import Button from "./Button";
import Icon from "../Icon/Icon";

export default function IconButton({
  icon,
  ...props
}: IconButtonProps) {
  return (
    <Button {...props}>
      <Icon {...icon} />
    </Button>
  );
}
