import Input, { type InputProps } from "./Input";

export type PasswordInputProps = Omit<InputProps, 'type'> & {
  show: boolean;
};

export default function PasswordInput({
  show,
  ...props
}: PasswordInputProps) {
  return (
    <Input
      {...props}
      type={show ? 'text' : 'password'}
    />
  );
}
