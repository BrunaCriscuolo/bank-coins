import { ReactNode } from "react";
import { CardSumaryContainer, Title, Value } from "./styles";

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
      <Title>{title}</Title>
      <Value>{value}</Value>
      {children}
    </CardSumaryContainer>
  );
}
