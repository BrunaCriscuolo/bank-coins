import { styled, css } from "styled-components";
import { ButtonFormProps } from '.';

const baseStyle = css`
      height: 50px;
      padding: 0 1.25rem;
      margin-right: 1rem;
`;

const getStylesByVariant = ({ variant }: ButtonFormProps) => ({
  'default': css`
      ${baseStyle}
      background: ${({ theme }) => theme["gray-500"]};
      border-color: transparent;
      color: ${({ theme }) => theme.white};

      transition: all 0.3s;

      &:hover {
        background: ${({ theme }) => theme["gray-600"]};
        border-color: ${({ theme }) => theme["yellow-500"]};
        color: ${({ theme }) => theme["yellow-500"]};
      }
  `,
  'primary': css`
      ${baseStyle}

      background: ${({ theme }) => theme["yellow-300"]};
      color: ${({ theme }) => theme["gray-600"]};

      border: 0;
      transition: background-color 0.3s;

      &:hover {
        background: ${({ theme }) => theme["yellow-500"]};
        color: ${({ theme }) => theme["gray-600"]};
      }
  `,
  'primary-form': css`
    background: ${({ theme }) => theme["yellow-300"]};
    border-color: ${({ theme }) => theme["yellow-300"]};

    padding: 1rem 0;
    margin-top: 1rem;

    transition: background-color 0.5s ease;

    &:hover {
      background: ${({ theme }) => theme["yellow-500"]};
      border: 1px solid ${({ theme }) => theme["yellow-500"]};
    }
  `,
  'transparent': css`
    border: 0;
    padding: 0;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0;
    background-color: transparent;
  `,
  'income': css`

  `,
  'outcome': css`

  `,
}[variant] || css`
      ${baseStyle}
`)

export const ButtonForm = styled.button<ButtonFormProps>`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;

  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => getStylesByVariant({ variant })}
`;