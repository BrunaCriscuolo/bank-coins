import styled, { css } from "styled-components";
import { UserAvatarProps } from '.';

const getStylesByVariant = ({ variant }: UserAvatarProps) => ({
  'large': css`
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;
  `,
  'small': css`
    width: 3.1rem;
    height: 3.1rem;
`,
}[variant] || css`
    width: 3.1rem;
    height: 3.1rem;
`)

export const AvatarWrapper = styled.img<UserAvatarProps>`

  border-radius: 50%;
  /*border: 0;

  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme["yellow-500"]};
    box-shadow: 0px 0px 10px 10px #00000015;
  }*/

  ${({ variant }) => getStylesByVariant({ variant })}
`;
