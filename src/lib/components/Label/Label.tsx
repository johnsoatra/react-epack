import type { LabelProps } from "./types";

export default function Label(props: LabelProps) {
  return (
    <label {...props} data-re-label />
  );
}
