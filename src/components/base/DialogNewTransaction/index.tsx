
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Dialog } from '../Dialog';
import { Form } from '../../forms/Form';
import { Input } from '../../forms/Input';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import { RadioButton } from '../../forms/RadioButton';
import { RadioButtonGroup } from '../../forms/RadioButtonGroup';

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

        <RadioButtonGroup>
          <RadioButton variant="income" value='income'>
            <ArrowCircleUp size={24} />
            Entrada
          </RadioButton>
          <RadioButton variant="outcome" value='outcome'>
            <ArrowCircleDown size={24} />
            Saída
          </RadioButton>
        </RadioButtonGroup>

        <Button type="submit" variant="primary-form">
          Cadastrar
        </Button>
      </Form>
    </Dialog>
  );
}
