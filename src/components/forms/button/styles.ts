import styled from "styled-components";

export const ButtonForm = styled.button`
  background: ${({ theme }) => theme["yellow-300"]};

  padding: 1rem 0;
  margin-top: 1rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme["yellow-300"]};
  font-weight: bold;

  transition: background 0.5s ease;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme["yellow-500"]};
    border: 1px solid ${({ theme }) => theme["yellow-500"]};
  }
`;
