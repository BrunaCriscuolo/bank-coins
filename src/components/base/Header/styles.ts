import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 212px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.black},
    ${({ theme }) => theme["gray-600"]}
  );

  border-bottom: 1px solid ${({ theme }) => theme["yellow-500"]}30;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    position: relative;
  }
  @media screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;
