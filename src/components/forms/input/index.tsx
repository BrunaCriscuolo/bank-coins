import { InputForm } from "./styles";

interface InputProps {
  placeholder: string;
  type?: string;
  required?: boolean;
}
export function Input({ placeholder, type, required }: InputProps): JSX.Element {
  return <InputForm placeholder={placeholder} type={type} required={required} />;
}
