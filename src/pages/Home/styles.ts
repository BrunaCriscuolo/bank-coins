import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 77em 1fr;
`;

export const TransactionsContainer = styled.main`
  grid-column: 2/3;

  width: 100%;
  max-width: 1120px;
  margin-top: 1rem;
`;
