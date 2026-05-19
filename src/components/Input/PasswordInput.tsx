import type { PasswordInputProps } from "./types";
import Input from "./Input";

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
