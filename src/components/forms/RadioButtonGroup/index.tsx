import { ReactNode } from "react";
import { RadioButtonGroupForm } from "./styles";

interface RadioButtonProps {
  children: ReactNode;
}

export function RadioButtonGroup({
  children,
}: RadioButtonProps): JSX.Element {
  return (
    <RadioButtonGroupForm>
      {children}
    </RadioButtonGroupForm>
  );
}
