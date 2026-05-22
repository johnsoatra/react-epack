import type React from "react";
import type { ComProps, More, WithClass } from "../../types";

export type LabelProps = WithClass<{
  htmlFor: string;
  children: React.ReactNode;
}> & More<ComProps.Label, 'htmlFor'>;
