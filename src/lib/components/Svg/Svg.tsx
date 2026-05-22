import type { SvgProps } from './types';
import { getConfig } from '../../config/config';

export default function Svg({
  pack: {
    name,
  },
  ...props
}: SvgProps) {
  const Icon = getConfig()?.svgList?.[name];

  if (!Icon) {
    console.error(`Could not find svg: ${name}`);
    return null;
  }

  return (
    <Icon {...props} data-re-svg="" />
  );
}
