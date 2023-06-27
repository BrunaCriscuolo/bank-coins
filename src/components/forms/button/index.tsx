import { ReactNode } from "react";
import { ButtonForm } from "./styles";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset";
}
export function Button({ children, type }: ButtonProps): JSX.Element {
  return <ButtonForm type={type}>{children}</ButtonForm>;
}
