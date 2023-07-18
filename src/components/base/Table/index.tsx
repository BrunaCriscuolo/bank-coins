import { ReactNode } from "react";
import { Table as T } from "./styles";

interface TableProps {
  children: ReactNode;
}

export function Table({
  children,
}: TableProps): JSX.Element {
  return (
    <T>
      {children}
    </T>
  );
}
