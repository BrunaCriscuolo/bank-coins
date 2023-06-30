import { Header } from "../../components/base/Header";
import { Sumary } from "../../components/base/Sumary";
import { HomeWrapper } from "./styles";

export default function Home(): JSX.Element {
  return (
    <HomeWrapper>
      <Header />
      <Sumary />
    </HomeWrapper>
  );
}
