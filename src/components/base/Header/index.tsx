
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent } from "./styles";
import { DialogProfile } from '../DialogProfile';
import { DialogNewCategory } from '../DialogNewCategory';
import { DialogNewTransaction } from '../DialogNewTransaction';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <div>
          <DialogNewCategory />
          <DialogNewTransaction />
        </div>
      </HeaderContent>
      <DialogProfile />
    </HeaderContainer>
  );
}
