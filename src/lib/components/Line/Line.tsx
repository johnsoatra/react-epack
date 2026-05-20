import type { LineProps } from "./types";

export default function Line({
  orientation,
  ...props
}: LineProps) {
  return (
    <div {...props} data-id="line" data-orientation={orientation} />
  );
}
