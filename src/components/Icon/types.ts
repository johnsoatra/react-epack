import type { OneOf } from "@/types";
import type { SvgProps } from "../Svg/types";
import type { ImageProps } from "../Image/types";

export type IconProps = OneOf<{
  svg: SvgProps;
  image: ImageProps;
  node: React.ReactNode;
}>;
