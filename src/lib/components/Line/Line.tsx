import type { LineProps } from "./types";

export default function Line({
  orientation,
  ...props
}: LineProps) {
  return (
    <div {...props} data-re-line data-re-orientation={orientation} />
  );
}
