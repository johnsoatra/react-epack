import type { ImageProps } from "./types";

export default function Image(props: ImageProps) {
  return (
    <img {...props} data-re-image="" />
  );
}
