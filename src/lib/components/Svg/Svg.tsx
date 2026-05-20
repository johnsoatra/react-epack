import type { SvgProps } from './types';
import { getConfig } from '../../config/config';

export default function Svg({
  name,
  reactName,
  ...props
}: SvgProps) {
  const Icon = Object
    .entries(getConfig()?.svgList ?? {})
    .find(([key]) => key === name)
    ?.[1];

  if (!Icon) {
    throw Error(`Could not find svg: ${name}`);
  }

  return (
    <Icon {...props} name={reactName} />
  );
}
