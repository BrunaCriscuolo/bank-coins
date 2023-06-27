import { Link } from "../../components/forms/Link";
import { Button } from "../../components/forms/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/input";

import { AuthLayout } from "../../components/layouts/AuthLayout";

export default function Login(): JSX.Element {
  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <Form>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="senha" />
        <Link label="Não tem conta? Cadastre-se aqui." href="/register" />
        <Button type="submit" styleButton="large-primary">
          Entrar
        </Button>
      </Form>
    </AuthLayout>
  );
}
