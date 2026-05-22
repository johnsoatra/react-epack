import type { CardProps } from "./types";

export default function Card({
  children,
  className,
  more,
}: CardProps) {
  return (
    <div
      {...more}
      children={children}
      className={className}
      data-re-card=""
    />
  );
}
