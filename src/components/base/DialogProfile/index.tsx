
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Avatar } from "../Avatar";
import { Dialog } from '../Dialog';
import { Form } from '../../forms/Form';
import { Input } from '../../forms/Input';

export function DialogProfile(): JSX.Element {
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
  );
}
