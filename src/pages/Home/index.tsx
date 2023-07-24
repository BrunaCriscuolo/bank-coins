import { Header } from "../../components/base/Header";
import { PriceHighlight } from '../../components/base/PriceHighlight';
import { Sumary } from "../../components/base/Sumary";
import { Table } from '../../components/base/Table';
import { Search } from '../../components/forms/Search';
import { HomeWrapper, TransactionsContainer } from "./styles";

export default function Home(): JSX.Element {
  return (
    <HomeWrapper>
      <Header />
      <Sumary />
      <Search placeholder='Buscar por transações' type='text' />
      <TransactionsContainer>
        <Table>
          <thead>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Categoria</td>
            <td>Data</td>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td><PriceHighlight variant='outcome'>R$ -59,00</PriceHighlight></td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </Table>
      </TransactionsContainer>
    </HomeWrapper>
  );
}
