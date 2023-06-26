import { ReactNode } from "react";
import { FormContainer } from "./styles";

interface FormProps {
  children: ReactNode;
}
export function Form({ children }: FormProps): JSX.Element {
  return <FormContainer>{children}</FormContainer>;
}
