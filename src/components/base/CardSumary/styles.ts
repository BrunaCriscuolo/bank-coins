import { styled } from "styled-components";

export const CardSumaryContainer = styled.div`
  background-color: ${({ theme }) => theme["gray-500"]};
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0 0 10px 5px #00000010;
`;

export const CardSumaryWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
