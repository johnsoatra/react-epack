import type { ExcludeChildren } from "../types";

export type SvgProps = ExcludeChildren<React.SVGProps<SVGSVGElement>> & {
  path: string,
};
