import { CurrencyContainer } from "./styles";

interface CurrencyProps {
  value?: number;
}

export function Currency({ value }: CurrencyProps): JSX.Element {
  return (
    <CurrencyContainer
      value={value}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$"
      decimalScale={2}
      fixedDecimalScale
    />
  );
}
