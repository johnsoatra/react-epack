import type { ButtonProps } from "./Button";
import type { IconProps } from "../Icon/Icon";
import Button from "./Button";
import Icon from "../Icon/Icon";

export type IconButtonProps = ButtonProps & {
  icon: IconProps,
};

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
