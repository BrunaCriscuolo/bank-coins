import { logo } from "../../../assets/images";
import { LogoContainer, Title } from "./styles";

export default function Logo(): JSX.Element {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo do back coins" width="20px" />
      <Title>Bank Coins</Title>
    </LogoContainer>
  );
}
