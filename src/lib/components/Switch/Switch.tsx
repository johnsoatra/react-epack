import type { SwitchProps } from "./types";
import Label from "../Label/Label";

export default function Switch({
  pack: {
    label,
    slider,
    sliderBall,
  } = {},
  ...props
}: SwitchProps) {
  return (
    <Label {...label} htmlFor={props.id} data-re-switch>
      <input {...props} type={'checkbox'} data-re-input="" />
      <div {...slider} data-re-slider="">
        <div {...sliderBall} data-re-slider-ball="" />
      </div>
    </Label>
  );
}
