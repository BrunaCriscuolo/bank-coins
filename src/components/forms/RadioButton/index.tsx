import { ReactNode } from "react";
import { RadioButtonForm } from "./styles";

export interface RadioButtonFormProps {
  variant: "income" | "outcome";
}

interface RadioButtonProps extends RadioButtonFormProps {
  children: ReactNode;
  value: string;
}

export function RadioButton({
  children,
  variant = "income",
  ...props
}: RadioButtonProps): JSX.Element {
  return (
    <RadioButtonForm variant={variant} {...props}>
      {children}
    </RadioButtonForm>
  );
}
