import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { CardSumary } from "../CardSumary";
import { SumaryContainer } from "./styles";
import { defaultTheme } from "../../../styles/defaultTheme";

export function Sumary(): JSX.Element {
  return (
    <SumaryContainer>
      <CardSumary title="Entradas" value={17400.0}>
        <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
      </CardSumary>
      <CardSumary title="Saídas" value={17000.0}>
        <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
      </CardSumary>
      <CardSumary title="Total" value={400.0} variant="balance">
        <CurrencyDollar size={32} color={defaultTheme["yellow-500"]} />
      </CardSumary>
    </SumaryContainer>
  );
}
