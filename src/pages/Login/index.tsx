import { Button } from "../../components/forms/button";
import { Form } from "../../components/forms/form";
import { Input } from "../../components/forms/input";
import AuthLayout from "../../components/layouts/AuthLayout";

export default function Login(): JSX.Element {
  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <Form>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="senha" />
        <Button>Entrar</Button>
      </Form>
    </AuthLayout>
  );
}
