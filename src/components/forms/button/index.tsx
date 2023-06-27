import { ReactNode } from "react";
import { ButtonForm, LargePrimaryButton, SmallDefaultButton } from "./styles";

interface GetButtonProps {
  styleButton: "large-primary" | "small-primary" | "small-default";
}
interface ButtonProps extends GetButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset";
}
export function Button({
  children,
  type,
  styleButton = "large-primary",
}: ButtonProps): JSX.Element {
  const getButtonByType = ({ styleButton }: GetButtonProps) =>
    ({
      "large-primary": (
        <LargePrimaryButton type={type}>{children}</LargePrimaryButton>
      ),
      "small-primary": (
        <LargePrimaryButton type={type}>{children}</LargePrimaryButton>
      ),
      "small-default": (
        <SmallDefaultButton type={type}>{children}</SmallDefaultButton>
      ),
    }[styleButton] || <ButtonForm type={type}>{children}</ButtonForm>);

  return <>{getButtonByType({ styleButton })}</>;
}
