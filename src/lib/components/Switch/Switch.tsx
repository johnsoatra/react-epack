import type { SwitchProps } from "./types";
import Label from "../Label/Label";
import Input from "../Input/Input";

export default function Switch({
  id,
  label,
  slider,
  sliderBall,
  ...props
}: SwitchProps) {
  return (
    <Label {...label} htmlFor={id} data-re-switch>
      <Input
        {...props}
        id={id}
        type={'checkbox'}
        suffix={{
          node: <>
            <div {...slider} data-re-slider>
              <div {...sliderBall} data-re-slider-ball />
            </div>
          </>
        }}
      />
    </Label>
  );
}
