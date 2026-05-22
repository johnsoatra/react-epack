import type { ComProps, More, WithClass } from "../../types";

export type ImageProps = WithClass<{
  alt: string;
  src: string | undefined;
}> & More<ComProps.Img, 'alt' | 'src'>;
