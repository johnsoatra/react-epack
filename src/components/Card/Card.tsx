import type { DivProps } from "../types";

export type CardProps = DivProps;

export default function Card(props: CardProps) {
  return (
    <div {...props} data-id="card" />
  );
}
