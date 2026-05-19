import type React from "react";

export type ImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> & {
  alt: string;
  src: string;
};

export default function Image({
  ...props
}: ImageProps) {
  return (
    <img {...props} />
  );
}
