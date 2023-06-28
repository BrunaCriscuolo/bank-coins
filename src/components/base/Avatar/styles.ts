import styled from "styled-components";
export const AvatarContainer = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 0;
`;
export const AvatarWrapper = styled.img`
  width: 100%;
  border-radius: 50%;

  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;
  grid-column: 3 / 4;
  display: flex;
  justify-self: flex-end;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme["yellow-500"]};
    box-shadow: 0px 0px 10px 10px #00000015;
  }
`;
