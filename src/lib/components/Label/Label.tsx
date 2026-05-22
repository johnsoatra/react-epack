import type { LabelProps } from "./types";

export default function Label({
  htmlFor,
  children,
  className,
  more
}: LabelProps) {
  return (
    <label
      {...more}
      htmlFor={htmlFor}
      children={children}
      className={className}
      data-re-label=""
    />
  );
}
