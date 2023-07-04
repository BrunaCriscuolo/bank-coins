
import * as DialogBase from '@radix-ui/react-dialog';

//volta para a aula do modal 01
export function Dialog(): JSX.Element {
  return (
    <DialogBase.Root>
      <DialogBase.Trigger />
      <DialogBase.Portal>
        <DialogBase.Overlay />
        <DialogBase.Content>
          <DialogBase.Title />
          <DialogBase.Description />
          <DialogBase.Close />
        </DialogBase.Content>
      </DialogBase.Portal>
    </DialogBase.Root>
  )
};