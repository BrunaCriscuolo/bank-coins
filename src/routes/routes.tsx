import { lazy, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Login"));

export function Routes(): JSX.Element {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Switch>
        <Route path="/login" index element={<LoginPage />} />
      </Switch>
    </Suspense>
  );
}
