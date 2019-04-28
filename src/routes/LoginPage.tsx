import * as React from "react";
import Button from "../components/Button";
import FullPage from "../components/FullPage";
import Header from "../components/Header";
import LoadingPage from "../components/LoadingPage";
import * as auth from "../database";

const LoginPage = () => {
  const login = () => auth.loginWithGoogle();
  const logout = () => auth.logout();

  const { initialising, user } = auth.useUser();

  if (initialising) {
    return <LoadingPage />;
  }

  const header = user != null ? user.displayName : "Recipes";

  return (
    <FullPage>
      <Header>{header}</Header>

      {user != null ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={login}>Login with Google</Button>
      )}
    </FullPage>
  );
};

export default LoginPage;
