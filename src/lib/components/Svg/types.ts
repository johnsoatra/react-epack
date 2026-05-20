import type { ExcludeChildren } from "../types";

export type SvgProps = ExcludeChildren<Omit<React.SVGProps<SVGSVGElement>, 'name'>> & {
  name: string,
  reactName?: string;
};
