
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Dialog } from '../Dialog';

export function DialogNewTransaction(): JSX.Element {
  const newTransactionButton: ReactNode = (
    <Button type="button" variant="primary">
      Nova Transação
    </Button>
  );

  return (
    <Dialog title='Nova Transação' trigger={newTransactionButton}>
      <p>Isso é um teste</p>
    </Dialog>
  );
}
