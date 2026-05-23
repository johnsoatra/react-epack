import Button from "../lib/components/Button/Button";
import Input from "../lib/components/Input/Input";
import Popover from "../lib/components/Popover/Popover";
import { useEffect, useState } from "react";

export default function () {
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleClick(e: PointerEvent) {
      console.log('click body');
      setShow(false);
    }
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    }
  }, []);
  return (
    <Popover
      pack={{
        show,
        target:
          <Input
            id="inputf"
            name="inputf"
            placeholder="test"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShow(true);
            }}
          />
      }}>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
    </Popover >
  );
}
