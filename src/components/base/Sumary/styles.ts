import { styled } from "styled-components";

export const SumaryContainer = styled.section`
  grid-column: 2 / 3;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -5rem;
`;
