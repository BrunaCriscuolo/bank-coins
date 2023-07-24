import { styled } from "styled-components";

export const SumaryContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 4rem;

  gap: 1rem;

  @media screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;
