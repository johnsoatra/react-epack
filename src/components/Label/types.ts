import type React from "react";

export type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'> & {
  htmlFor: string;
};
