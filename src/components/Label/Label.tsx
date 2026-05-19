import type React from "react";

export type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'> & {
  htmlFor: string;
};

export default function Label(props: LabelProps) {
  return (
    <label {...props} />
  );
}
