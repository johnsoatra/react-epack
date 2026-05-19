import type React from 'react';
import type { SvgProps } from './types';

const Icons = import.meta.glob('@/assets/svg/**/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
}) as Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>;

export default function Svg({
  path,
  ...props
}: SvgProps) {
  const Icon = Object
    .entries(Icons)
    .find(([pathname]) => pathname.endsWith(`/${path}.svg`))
    ?.[1];

  if (!Icon) {
    throw Error(`Could not find svg: ${path}`);
  }

  return (
    <Icon {...props} />
  );
}
