import type { SwitchProps } from "./types";
import Label from "../Label/Label";
import Input from "../Input/Input";

export default function Switch({
  label,
  slider,
  sliderBall,
  ...props
}: SwitchProps) {
  return (
    <Label {...label} htmlFor={props.id} data-re-switch>
      <Input
        {...props}
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
