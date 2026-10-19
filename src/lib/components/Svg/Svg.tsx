import type { SvgProps } from './types';
import { getConfig } from '../../config/config';

export default function Svg({
  pack: {
    reactName,
  } = {},
  name,
  ...props
}: SvgProps) {
  const Icon = getConfig()?.svgList?.[name] as any;

  if (!Icon) {
    // eslint-disable-next-line no-console
    console.error(`Could not find svg: ${name}`);
    return null;
  }

  return (
    <Icon {...props} name={reactName} data-re-svg="" />
  );
}
