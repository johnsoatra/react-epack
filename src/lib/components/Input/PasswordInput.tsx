import type { PasswordInputProps } from "./types";
import Input from "./Input";

export default function PasswordInput({
  pack: {
    show,
    ...pack
  } = {},
  ...props
}: PasswordInputProps) {
  return (
    <Input {...props} pack={pack} type={show ? 'text' : 'password'} />
  );
}
