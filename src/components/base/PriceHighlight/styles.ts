import { styled, css } from "styled-components";
import { PriceHighlightOtherProps } from '.';

const getStylesByVariant = ({ variant }: PriceHighlightOtherProps) => ({
  'income': css`
    color: ${({ theme }) => theme['green-500']};
  `,
  'outcome': css`
    color: ${({ theme }) => theme['red-500']};
  `,
}[variant] || css`
    color: ${({ theme }) => theme.white};
`)

export const PriceHighlight = styled.span<PriceHighlightOtherProps>`
  ${({ variant }) => getStylesByVariant({ variant })}
`;