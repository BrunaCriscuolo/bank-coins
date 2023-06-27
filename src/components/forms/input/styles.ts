import styled from "styled-components";

export const InputForm = styled.input`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  border: 0;
  border-radius: 6px;

  padding: 1rem;

  & + & {
    margin-top: 1rem;
  }
`;
