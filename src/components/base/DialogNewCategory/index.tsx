
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Dialog } from '../Dialog';
import { Input } from '../../forms/Input';
import { Form } from '../../forms/Form';

export function DialogNewCategory(): JSX.Element {
  const newCategoryButton: ReactNode = (
    <Button type="button" variant="default">
      Nova Categoria
    </Button>
  );

  return (
    <Dialog title='Nova Categoria' trigger={newCategoryButton}>
      <Form>
        <Input placeholder="Descrição" type="text" required />

        <Button type="submit" variant="primary-form">
          Cadastrar
        </Button>
      </Form>
    </Dialog>
  );
}
