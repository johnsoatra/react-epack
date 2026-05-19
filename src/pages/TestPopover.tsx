import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Popover from "@/components/Popover/Popover";
import { useEffect, useState } from "react";

export default function TestPopover() {
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
      show={show}
      target={
        <Input id="test" placeholder="test" onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShow(true);
        }}/>
      }>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
      <p>Hello world</p>
    </Popover>
  );
}
