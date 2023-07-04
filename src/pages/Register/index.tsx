import { Link } from "../../components/forms/Link";
import { Button } from "../../components/forms/Button";
import { Form } from "../../components/forms/Form";
import { Input } from "../../components/forms/Input";

import { AuthLayout } from "../../components/layouts/AuthLayout";

export default function Register(): JSX.Element {
  return (
    <AuthLayout
      title="Cadastro"
      subtitle="Crie sua conta e começe a gerenciar suas finanças."
    >
      <Form>
        <Input placeholder="Nome e sobrenome" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
        <Link label="Já possui conta? Faça login aqui." href="/login" />
        <Button type="submit" variant="primary-form">Criar conta</Button>
      </Form>
    </AuthLayout>
  );
}
