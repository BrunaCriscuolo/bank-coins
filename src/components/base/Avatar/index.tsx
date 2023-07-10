import { AvatarWrapper } from "./styles";

export interface UserAvatarProps {
  variant: 'large' | 'small';
}
interface AvatarProps extends UserAvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt, variant = 'small' }: AvatarProps): JSX.Element {
  return (
    <AvatarWrapper src={src} alt={alt} variant={variant} />
  );
}
