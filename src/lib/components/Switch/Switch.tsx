import type { SwitchProps } from "./types";
import Label from "../Label/Label";

export default function Switch({
  htmlId,
  id,
  input,
  slider,
  sliderBall,
  className,
  more,
}: SwitchProps) {
  return (
    <Label
      more={{ ...more, id: htmlId }}
      htmlFor={id}
      className={className}
      data-re-switch="">
      <input
        {...input}
        id={id}
        name={id}
        type={'checkbox'}
        data-re-input=""
      />
      <div {...slider} data-re-slider="">
        <div {...sliderBall} data-re-slider-ball="" />
      </div>
    </Label>
  );
}
