import type React from "react";
import type { ListProps } from "./types";

export default function List<T extends React.ReactNode>({
  data,
  li,
  ...props
}: ListProps<T>) {
  return (
    <ul {...props} data-id="list">
      {data.map((item, index) => {
        const { key, ...liProps } = (
          typeof li === 'function' ?
            li(item) :
            li
        ) ?? {};
        return (
          <li
            key={key ?? index}
            {...liProps}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
