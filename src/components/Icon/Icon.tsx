import type { IconProps } from './types';
import Svg from '../Svg/Svg';
import Image from '../Image/Image';

export default function Icon(props: IconProps) {
  return (
    props.svg ?
      <Svg {...props.svg} /> :
      props.image ?
        <Image {...props.image} /> :
        props.node
  );
}
