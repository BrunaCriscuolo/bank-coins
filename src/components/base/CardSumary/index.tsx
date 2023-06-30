import { ReactNode } from "react";
import { CardSumaryContainer, CardSumaryWrapper } from "./styles";
import { Currency } from "../Currency";

interface CardSumaryProps {
  title: string;
  value?: number;
  children?: ReactNode;
}

export function CardSumary({
  title,
  value,
  children,
}: CardSumaryProps): JSX.Element {
  return (
    <CardSumaryContainer>
      <CardSumaryWrapper>
        <span>{title}</span>
        {children}
      </CardSumaryWrapper>
      <Currency value={value} />
    </CardSumaryContainer>
  );
}
