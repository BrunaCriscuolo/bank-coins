
import { ReactNode } from 'react';
import * as DialogBase from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './styles';
import { X } from 'phosphor-react';
interface DialogProps {
  children?: ReactNode;
  trigger: ReactNode;
  title: string;
}

export function Dialog({ children, title, trigger }: DialogProps): JSX.Element {
  return (
    <DialogBase.Root>
      <DialogBase.Trigger asChild>
        {trigger}
      </DialogBase.Trigger>
      <DialogBase.Portal>
        <Overlay />
        <Content>
          <DialogBase.Title>
            {title}
          </DialogBase.Title>
          <DialogBase.Description />
          <Close>
            <X size={24} />
          </Close>
          {children}
        </Content>
      </DialogBase.Portal>
    </DialogBase.Root>
  )
};