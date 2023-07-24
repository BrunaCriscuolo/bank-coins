import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1.5rem auto 0;

  @media screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;
