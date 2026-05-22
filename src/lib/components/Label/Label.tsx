import type { LabelProps } from "./types";

export default function Label({
  pack,
  ...props
}: LabelProps) {
  return (
    <label {...props} data-re-label="" />
  );
}
