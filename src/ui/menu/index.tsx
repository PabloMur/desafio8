import { useSetUserLogged, useUserLogout } from "hooks";
import React from "react";
import {
  LoginButton,
  LogoutButton,
  MenuButton,
  SignupButton,
} from "ui/buttons";
import css from "./styles.css";

const Menu = () => {
  const setLogedOut = useSetUserLogged();
  const logOut = () => {
    useUserLogout();
    setLogedOut({ logged: false });
  };
  return (
    <nav>
      <ul className={css.root}>
        <MenuButton route="/userdata">My Data</MenuButton>
        <MenuButton route="/my-pets">My Pets</MenuButton>
        <MenuButton route="/my-reports">My Reports</MenuButton>
        <LoginButton route="/login">Login</LoginButton>
        <SignupButton route="/signup">Signup</SignupButton>
        <LogoutButton onClick={logOut} />
      </ul>
    </nav>
  );
};

export { Menu };
