import type React from "react";
import type { ListProps } from "./types";

export default function List<T extends React.ReactNode>({
  data,
  li,
  ...props
}: ListProps<T>) {
  return (
    <ul {...props} data-re-list>
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
            data-re-li>
            {children !== undefined ? children : item}
          </li>
        );
      })}
    </ul>
  );
}
