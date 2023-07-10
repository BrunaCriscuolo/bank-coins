
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Avatar } from "../Avatar";
import { Dialog } from '../Dialog';
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent } from "./styles";
import { Form } from '../../forms/Form';
import { Input } from '../../forms/Input';

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
    <Button type="button" variant="transparent">
      <Avatar
        src="https://avatars.githubusercontent.com/u/36765987?v=4"
        alt="avatar profile"
        variant="small"
      />
    </Button>
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
        <Form>
          <Avatar
            src="https://avatars.githubusercontent.com/u/36765987?v=4"
            alt="avatar profile"
            variant="large"
          />
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Senha" type="senha" />

          <Button type="submit" variant="primary-form">
            Atualizar
          </Button>
        </Form>
      </Dialog>
    </HeaderContainer>
  );
}
