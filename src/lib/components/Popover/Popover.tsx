import type { PopoverProps } from "./types";

export default function Popover({
  show,
  target,
  container,
  children,
  className,
  more,
}: PopoverProps) {
  return (
    <div {...container} data-re-popover="">
      {target}
      {show &&
        <div
          {...more}
          className={className}
          children={children}
          data-re-content=""
        />
      }
    </div>
  );
}
