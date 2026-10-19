export interface SvgList { };

export type SvgName = keyof SvgList;

export type Config = {
  svgList: SvgList;
};
