import { AvatarWrapper } from "./styles";

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps): JSX.Element {
  return <AvatarWrapper src={src} alt={alt} />;
}
