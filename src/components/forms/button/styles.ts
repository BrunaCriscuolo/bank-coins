import styled from "styled-components";

export const ButtonForm = styled.button`
  border-radius: 6px;
  font-weight: bold;
  border-width: 1px;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }

  .large-primary {
    background: ${({ theme }) => theme["yellow-300"]};
    border-color: ${({ theme }) => theme["yellow-300"]};

    padding: 1rem 0;
    margin-top: 1rem;

    transition: background 0.5s ease;

    &:hover {
      background: ${({ theme }) => theme["yellow-500"]};
      border: 1px solid ${({ theme }) => theme["yellow-500"]};
    }
  }

  .small-default {
    background: ${({ theme }) => theme["gray-500"]};
    border-color: transparent;
    color: ${({ theme }) => theme.white};

    height: 50px;
    padding: 0 1.25rem;
    margin-right: 1rem;

    transition: all 0.3s;

    &:hover {
      background: ${({ theme }) => theme["gray-600"]};
      border-color: ${({ theme }) => theme["yellow-500"]};
      color: ${({ theme }) => theme["yellow-500"]};
    }
  }
`;

export const LargePrimaryButton = styled(ButtonForm)`
  background: ${({ theme }) => theme["yellow-300"]};
  border-color: ${({ theme }) => theme["yellow-300"]};

  padding: 1rem 0;
  margin-top: 1rem;

  transition: background 0.5s ease;

  &:hover {
    background: ${({ theme }) => theme["yellow-500"]};
    border: 1px solid ${({ theme }) => theme["yellow-500"]};
  }
`;

export const SmallDefaultButton = styled(ButtonForm)`
  background: ${({ theme }) => theme["gray-500"]};
  border-color: transparent;
  color: ${({ theme }) => theme.white};

  height: 50px;
  padding: 0 1.25rem;
  margin-right: 1rem;

  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme["gray-600"]};
    border-color: ${({ theme }) => theme["yellow-500"]};
    color: ${({ theme }) => theme["yellow-500"]};
  }
`;
