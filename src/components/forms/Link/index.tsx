import { LinkForm } from "./styles";

interface LinkProps {
  label: string;
  href: string;
}
export function Link({ label, href }: LinkProps): JSX.Element {
  return <LinkForm href={href}>{label}</LinkForm>;
}
