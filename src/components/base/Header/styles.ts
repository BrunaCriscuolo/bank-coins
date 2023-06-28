import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.black},
    ${({ theme }) => theme["gray-600"]}
  );
  padding: 2.5rem 0 7.5rem;

  grid-column-start: 1;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: 1fr 70rem 7rem 1fr;

  border-bottom: 1px solid ${({ theme }) => theme["yellow-500"]}30;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;

  grid-column: 2;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
