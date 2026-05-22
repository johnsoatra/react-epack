import type { ImageProps } from "./types";

export default function Image({
  alt,
  src,
  className,
  more,
}: ImageProps) {
  return (
    <img
      {...more}
      alt={alt}
      src={src}
      className={className}
      data-re-image=""
    />
  );
}
