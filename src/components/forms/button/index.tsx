import { ReactNode, ButtonHTMLAttributes } from "react";
import { StyleButton } from "./styles";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "styleButton"> {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  styleButton?: "btn-primary" | "btn-default" | "btn-primary-form";
}

export function Button({
  children,
  type,
  styleButton = "btn-primary-form",
  ...props
}: ButtonProps): JSX.Element {
  const className =
    styleButton === "btn-primary" || styleButton === "btn-default"
      ? `btn-base ${styleButton}`
      : styleButton;
  return (
    <StyleButton type={type} className={className} {...props}>
      {children}
    </StyleButton>
  );
}
