import type { CardProps } from "./types";

export default function Card(props: CardProps) {
  return (
    <div {...props} data-id="card" />
  );
}
