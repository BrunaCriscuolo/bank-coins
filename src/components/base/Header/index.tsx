
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Avatar } from "../Avatar";
import { Dialog } from '../Dialog';
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header(): JSX.Element {
  const newCategoryButton: ReactNode = (
    <Button type="button" variant="default">
      Nova Categoria
    </Button>
  );
  const newTransactionButton: ReactNode = (
    <Button type="button" variant="primary">
      Nova Transação
    </Button>
  );

  const userAvatar: ReactNode = (
    <Avatar
      src="https://avatars.githubusercontent.com/u/36765987?v=4"
      alt="avatar profile"
    />
  );

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <div>
          <Dialog title='Nova Categoria' trigger={newCategoryButton}>
            <p>Isso é um teste</p>
          </Dialog>
          <Dialog title='Nova Transação' trigger={newTransactionButton}>
            <p>Isso é um teste</p>
          </Dialog>
        </div>
      </HeaderContent>
      <Dialog title='Meu Perfil' trigger={userAvatar}>
        <p>Isso é um teste</p>
      </Dialog>
    </HeaderContainer>
  );
}
