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
    console.error(`Could not find svg: ${name}`);
    return null;
  }

  return (
    <Icon {...props} name={reactName} data-re-svg />
  );
}
