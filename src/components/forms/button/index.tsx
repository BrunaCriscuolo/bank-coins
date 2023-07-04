import { ReactNode } from "react";
import { ButtonForm } from "./styles";

export interface ButtonFormProps {
  variant?: "primary" | "default" | "primary-form";
}

interface ButtonProps extends ButtonFormProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

export function Button({
  children,
  type,
  variant = "primary-form",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonForm type={type} variant={variant} {...props}>
      {children}
    </ButtonForm>
  );
}
