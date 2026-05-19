import type { LabelProps } from "../Label/Label";
import type { InputProps } from "../Input/Input";
import type { DivProps } from "../types";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";

export type SwitchProps = Omit<InputProps, 'type'> & {
  label?: LabelProps;
  slider?: DivProps;
  sliderBall?: DivProps;
};

export default function Switch({
  label,
  slider,
  sliderBall,
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
            {props.suffix && <Icon {...props.suffix} />}
          </>
        }}
      />
    </Label>
  );
}
