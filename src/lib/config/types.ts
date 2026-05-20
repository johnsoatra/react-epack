export type SvgList = Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>;
export type Config = {
  svgList: SvgList;
};
