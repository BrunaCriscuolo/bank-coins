import { InputForm } from "./styles";

interface InputProps {
  placeholder: string;
  type: string;
}
export function Input({ placeholder, type }: InputProps): JSX.Element {
  return <InputForm placeholder={placeholder} type={type} />;
}
