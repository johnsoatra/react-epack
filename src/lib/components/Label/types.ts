import type React from "react";
import type { ExcludeChildren } from "../types";

export type LabelProps = ExcludeChildren<Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>> & {
  htmlFor: string;
  children: React.ReactNode;
};
