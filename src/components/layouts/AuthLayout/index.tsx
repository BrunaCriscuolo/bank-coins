import { ReactNode } from "react";

import Logo from "../../base/Logo";

import { AuthBackground, AuthContent, AuthWrapper } from "./styles";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}
export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps): JSX.Element {
  return (
    <AuthBackground>
      <AuthWrapper>
        <header>
          <Logo />
        </header>

        <AuthContent>
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {children}
          </div>
        </AuthContent>
      </AuthWrapper>
    </AuthBackground>
  );
}
