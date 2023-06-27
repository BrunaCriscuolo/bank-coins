import { Button } from "../../forms/button";
import { Avatar } from "../Avatar";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <Button type="button">Nova Categoria</Button>
        <Button type="button">Nova Transação</Button>
      </HeaderContent>
      <Avatar
        src="https://avatars.githubusercontent.com/u/36765987?v=4"
        alt="avatar profile"
      />
    </HeaderContainer>
  );
}
