import type React from "react";
import type { OrderListProps } from "./types";

export default function OrderList<T extends React.ReactNode>({
  data,
  li,
  className,
  more,
}: OrderListProps<T>) {
  return (
    <ol {...more} className={className} data-re-order-list="">
      {data.map((item, index) => {
        const { key, children, ...liProps } = (
          typeof li === 'function' ?
            li(item, index) :
            li
        ) ?? {};
        return (
          <li
            key={key ?? index}
            {...liProps}
            data-re-li="">
            {children !== undefined ? children : item}
          </li>
        );
      })}
    </ol>
  );
}
