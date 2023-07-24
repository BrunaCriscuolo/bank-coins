import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
   width: 100%;
  max-width: 1120px;
  margin: 3rem auto 0;

  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;

export const SearchInput = styled.input`
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
