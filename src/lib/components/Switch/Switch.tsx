import type { SwitchProps } from "./types";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";

export default function Switch({
  label,
  slider,
  sliderBall,
  suffix,
  ...props
}: SwitchProps) {
  return (
    <Label {...label} htmlFor={props.id} data-id="label-switch">
      <Input
        {...props}
        type={'checkbox'}
        suffix={{
          node: <>
            <div {...slider} data-id="slider">
              <div {...sliderBall} data-id="slider-ball" />
            </div>
            {suffix && <Icon {...suffix} />}
          </>
        }}
      />
    </Label>
  );
}
