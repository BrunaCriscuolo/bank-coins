import { styled, css } from "styled-components";
import { CardSumaryContainerProps } from ".";

export const CardSumaryContainer = styled.div<CardSumaryContainerProps>`
  flex: 1;
  height: 140px;
  background-color: ${({ theme }) => theme["gray-500"]};
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0 0 10px 5px #00000010;

  ${({ variant }) =>
    variant === "balance" &&
    css`
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme["gray-500"]},
        ${({ theme }) => theme["gray-700"]}
      );
      border-right: 2px solid ${({ theme }) => theme["yellow-500"]};

      header {
        color: ${({ theme }) => theme["yellow-500"]};
      }
      strong {
        ${({ theme }) => theme["yellow-500"]};
      }
    `};
`;

export const CardSumaryWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
