
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Dialog } from '../Dialog';
import { Form } from '../../forms/Form';
import { Input } from '../../forms/Input';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';

export function DialogNewTransaction(): JSX.Element {
  const newTransactionButton: ReactNode = (
    <Button type="button" variant="primary">
      Nova Transação
    </Button>
  );

  return (
    <Dialog title='Nova Transação' trigger={newTransactionButton}>
      <Form>
        <Input placeholder="Descrição" type="text" required />
        <Input placeholder="Preço" type="number" required />
        <Input placeholder="Categoria" type="text" required />

        <div>
          <Button type="button" variant="income">
            <ArrowCircleUp size={24} />
            Entrada
          </Button>
          <Button type="button" variant="outcome">
            <ArrowCircleDown size={24} />
            Saída
          </Button>
        </div>

        <Button type="submit" variant="primary-form">
          Cadastrar
        </Button>
      </Form>
    </Dialog>
  );
}
