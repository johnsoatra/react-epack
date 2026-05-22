import type { LineProps } from "./types";

export default function Line({
  orientation,
  className,
  more,
}: LineProps) {
  return (
    <div
      {...more}
      className={className}
      data-re-orientation={orientation ?? ""}
      data-re-line=""
    />
  );
}
