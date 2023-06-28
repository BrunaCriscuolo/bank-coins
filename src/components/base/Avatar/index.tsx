import { AvatarContainer, AvatarWrapper } from "./styles";

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps): JSX.Element {
  return (
    <AvatarContainer>
      <AvatarWrapper src={src} alt={alt} />
    </AvatarContainer>
  );
}
