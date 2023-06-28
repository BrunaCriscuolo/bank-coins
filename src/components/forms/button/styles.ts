import styled from "styled-components";

export const ButtonForm = styled.button`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;

  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const StyleButton = styled(ButtonForm)`
  &.btn-primary-form {
    background: ${({ theme }) => theme["yellow-300"]};
    border-color: ${({ theme }) => theme["yellow-300"]};

    padding: 1rem 0;
    margin-top: 1rem;

    transition: background-color 0.5s ease;

    &:hover {
      background: ${({ theme }) => theme["yellow-500"]};
      border: 1px solid ${({ theme }) => theme["yellow-500"]};
    }
  }
  &.btn-base {
    height: 50px;
    padding: 0 1.25rem;
    margin-right: 1rem;

    &.btn-primary {
      background: ${({ theme }) => theme["yellow-300"]};
      color: ${({ theme }) => theme["gray-600"]};

      border: 0;
      transition: background-color 0.3s;

      &:hover {
        background: ${({ theme }) => theme["yellow-500"]};
        color: ${({ theme }) => theme["gray-600"]};
      }
    }

    &.btn-default {
      background: ${({ theme }) => theme["gray-500"]};
      border-color: transparent;
      color: ${({ theme }) => theme.white};

      transition: all 0.3s;

      &:hover {
        background: ${({ theme }) => theme["gray-600"]};
        border-color: ${({ theme }) => theme["yellow-500"]};
        color: ${({ theme }) => theme["yellow-500"]};
      }
    }
  }
`;
