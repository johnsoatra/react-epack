import type { LineProps } from "./types";

export default function Line({
  pack: {
    orientation,
  } = {},
  ...props
}: LineProps) {
  return (
    <div {...props} data-re-orientation={orientation ?? ""} data-re-line="" />
  );
}
