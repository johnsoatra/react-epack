import type React from "react";
import type { ExcludeChildren } from "../types";

export type ImageProps = ExcludeChildren<
  Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'alt' | 'src'
  >
> & {
  alt: string;
  src: string;
};
