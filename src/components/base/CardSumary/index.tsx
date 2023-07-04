import { ReactNode } from "react";
import { CardSumaryContainer, CardSumaryWrapper } from "./styles";
import { Currency } from "../Currency";

export interface CardSumaryContainerProps {
  variant?: "balance";
}

interface CardSumaryProps extends CardSumaryContainerProps {
  title: string;
  value?: number;
  children?: ReactNode;
}

export function CardSumary({
  title,
  value,
  children,
  variant,
}: CardSumaryProps): JSX.Element {
  return (
    <CardSumaryContainer variant={variant}>
      <CardSumaryWrapper>
        <span>{title}</span>
        {children}
      </CardSumaryWrapper>
      <Currency value={value} />
    </CardSumaryContainer>
  );
}
