import { Header } from "../../components/base/Header";
import { Sumary } from "../../components/base/Sumary";
import { Search } from '../../components/forms/Search';
import { HomeWrapper } from "./styles";

export default function Home(): JSX.Element {
  return (
    <HomeWrapper>
      <Header />
      <Sumary />
      <Search placeholder='Buscar por transações' type='text' />
    </HomeWrapper>
  );
}
