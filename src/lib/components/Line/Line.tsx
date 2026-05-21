import type { LineProps } from "./types";

export default function Line({
  orientation,
  ...props
}: LineProps) {
  return (
    <div {...props} data-re-orientation={orientation} data-re-line />
  );
}
