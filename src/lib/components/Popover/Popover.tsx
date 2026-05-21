import type { PopoverProps } from "./types";

export default function Popover({
  show,
  target,
  container,
  ...props
}: PopoverProps) {
  return (
    <div {...container} data-re-popover="">
      {target}
      {show && <div {...props} data-re-content="" />}
    </div>
  );
}
