import type { CardProps } from "./types";

export default function Card({
  pack,
  ...props
}: CardProps) {
  return (
    <div {...props} data-re-card="" />
  );
}
