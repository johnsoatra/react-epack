import type { IconProps } from './types';
import Svg from '../Svg/Svg';
import Image from '../Image/Image';

export default function Icon({
  svg,
  image,
  node,
}: IconProps) {
  return (
    svg ?
      <Svg {...svg} /> :
      image ?
        <Image {...image} /> :
        node
  );
}
