
import { ReactNode } from 'react';

import { Button } from "../../forms/Button";
import { Dialog } from '../Dialog';

export function DialogNewCategory(): JSX.Element {
  const newCategoryButton: ReactNode = (
    <Button type="button" variant="default">
      Nova Categoria
    </Button>
  );

  return (
    <Dialog title='Nova Categoria' trigger={newCategoryButton}>
      <p>Isso é um teste</p>
    </Dialog>
  );
}
