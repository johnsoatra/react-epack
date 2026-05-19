import type React from 'react';
import type { OneOf } from '@/types';
import type { SvgProps } from '../Svg/Svg';
import type { ImageProps } from '../Image/Image';
import Svg from '../Svg/Svg';
import Image from '../Image/Image';

export type IconProps = OneOf<{
  svg: SvgProps;
  image: ImageProps;
  node: React.ReactNode;
}>;

export default function Icon(props: IconProps) {
  return (
    props.svg ?
      <Svg {...props.svg} /> :
      props.image ?
        <Image {...props.image} /> :
        props.node
  );
}
