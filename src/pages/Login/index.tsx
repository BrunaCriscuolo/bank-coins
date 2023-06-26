import { Form } from "../../components/forms/form";
import AuthLayout from "../../components/layouts/AuthLayout";

export default function Login(): JSX.Element {
  return (
    <AuthLayout
      title="Login"
      subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
    >
      <Form>
        <p>teste</p>
      </Form>
    </AuthLayout>
  );
}
