import { lazy, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const HomePage = lazy(() => import("../pages/Home"));

export function Routes(): JSX.Element {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Switch>
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" index element={<HomePage />} />
      </Switch>
    </Suspense>
  );
}
