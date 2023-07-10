import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  grid-column: 2 / 3;
  grid-template-columns: 1fr 1.5rem auto;
  
  width: 100%;
  max-width: 1120px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  display: grid;
`;

export const SearchInput = styled.input`
  grid-column: 1 / 2;
  flex: 1;
  border-radius: 6px;
  border: 0;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-400']};
  }
`;

export const ButtonSearch = styled.button`
  grid-column: 3 / 4;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme['yellow-300']};
  border-radius: 8px;
  color: ${({ theme }) => theme['yellow-300']};

  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['yellow-500']};
    border-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme['gray-600']};
  }
`;
