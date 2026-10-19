import type { IconButtonProps } from "./types";
import Button from "./Button";
import Icon from "../Icon/Icon";

export default function IconButton({
  pack: {
    icon,
    ...pack
  },
  ...props
}: IconButtonProps) {
  return (
    <Button {...props} pack={pack}>
      {<Icon {...icon} />}
    </Button>
  );
}
