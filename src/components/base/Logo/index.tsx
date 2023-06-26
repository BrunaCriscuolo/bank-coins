import { logo } from "../../../assets/images";
import { LogoContainer, Title } from "./styles";

export function Logo(): JSX.Element {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo do back coins" width="20px" />
      <Title>Bank Coins</Title>
    </LogoContainer>
  );
}
