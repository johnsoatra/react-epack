export type SvgList = Record<
  string,
  React.FC<React.ComponentProps<'svg'>>
>;

export type Config = {
  svgList: SvgList;
};
