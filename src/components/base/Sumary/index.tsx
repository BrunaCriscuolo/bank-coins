import { CardSumary } from "../CardSumary";
import { SumaryContainer } from "./styles";

export function Sumary(): JSX.Element {
  return (
    <SumaryContainer>
      <CardSumary title="Entradas" />
      <CardSumary title="Saídas" />
      <CardSumary title="Total" />
    </SumaryContainer>
  );
}
