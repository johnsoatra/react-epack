import type { PopoverProps } from "./types";

export default function Popover({
  show,
  target,
  container,
  ...props
}: PopoverProps) {
  return (
    <div {...container} data-id="popover">
      {target}
      {show && <div {...props} data-id="content" />}
    </div>
  );
}
