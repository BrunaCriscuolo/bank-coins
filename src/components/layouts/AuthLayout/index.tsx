import { ReactNode } from "react";
import Logo from "../../base/Logo";

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
    <div>
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
    </div>
  );
}
