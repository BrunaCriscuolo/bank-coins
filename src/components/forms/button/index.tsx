import { ReactNode } from "react";
import { ButtonForm } from "./styles";

interface ButtonProps {
  children: ReactNode;
}
export function Button({ children }: ButtonProps): JSX.Element {
  return <ButtonForm>{children}</ButtonForm>;
}
