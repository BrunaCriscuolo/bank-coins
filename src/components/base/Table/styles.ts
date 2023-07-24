import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  thead {
    td {
    padding: 1rem 2rem;
    background: transparent;
  }
  }

  tbody {
    td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-500']};
  }
  }
`;