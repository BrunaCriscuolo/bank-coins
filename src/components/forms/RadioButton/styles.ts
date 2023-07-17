import { styled, css } from "styled-components";
import { RadioButtonFormProps } from '.';
import * as RadioGroup from '@radix-ui/react-radio-group';

const baseStyle = css`
      height: 50px;
      padding: 0 1.25rem;
      margin-right: 1rem;
`;

const getStylesByVariant = ({ variant }: RadioButtonFormProps) => ({
  'income': css`
    border: 0;
    background-color: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme['green-500']};
    }

    &[data-state='checked'] {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['green-600']};
      outline: ${({ theme }) => theme['green-600']};
    }
  `,
  'outcome': css`
    border: 0;
    background-color: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme['red-500']};
    }

    &[data-state='checked'] {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['red-600']};
      outline: ${({ theme }) => theme['red-600']};
    }
  `,
}[variant] || css`
      ${baseStyle}
`)

export const RadioButtonForm = styled(RadioGroup.Item) <RadioButtonFormProps>`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;

  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => getStylesByVariant({ variant })}
`;