import { ReactNode } from 'react';
import { PriceHighlight as PriceH } from "./styles";

export interface PriceHighlightOtherProps {
  variant: "income" | "outcome";
}

interface TableProps extends PriceHighlightOtherProps {
  children: ReactNode;
}

export function PriceHighlight({
  children,
  variant
}: TableProps): JSX.Element {
  return (
    <PriceH variant={variant}>
      {children}
    </PriceH>
  );
}
