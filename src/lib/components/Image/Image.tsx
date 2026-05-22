import type { ImageProps } from "./types";

export default function Image({
  pack,
  ...props
}: ImageProps) {
  return (
    <img {...props} data-re-image="" />
  );
}
