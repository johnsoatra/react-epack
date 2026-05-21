import { useState } from "react";
import List from "../lib/components/List/List";

export default function () {
  const [show, setShow] = useState(false);
  return (
    <List
      data={[
        'hello world',
        'good bu work'
      ]}
      li={(item) => ({
        className: 'border-t',
        key: item,
      })}
      className="bg-red-100 rounded-sm border"
    />
  );
}
