import { ReactNode } from "react";

import Logo from "../../base/Logo";

import { AuthBackground } from "./styles";

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
      <main>
        <header>
          <Logo />
        </header>
      </main>
      <section>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {children}
        </div>
      </section>
    </AuthBackground>
  );
}
