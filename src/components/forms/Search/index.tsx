import { MagnifyingGlass } from 'phosphor-react';
import { ButtonSearch, SearchFormContainer, SearchInput } from "./styles";

interface SearchProps {
  placeholder?: string;
  type: 'text' | 'number' | 'email' | 'password';
}

export function Search({ placeholder, type }: SearchProps): JSX.Element {
  return (
    <SearchFormContainer>
      <SearchInput type={type} placeholder={placeholder} />

      <ButtonSearch>
        <MagnifyingGlass size={20} />
        Buscar
      </ButtonSearch>
    </SearchFormContainer>
  );
}
