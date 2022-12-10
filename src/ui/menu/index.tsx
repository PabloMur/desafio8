import React from "react";
import { LoginButton, MenuButton, SignupButton } from "ui/buttons";
import { Link } from "react-router-dom";
import css from "./styles.css";

const Menu = () => {
  return (
    <nav>
      <ul className={css.root}>
        <MenuButton route="/userdata">My Data</MenuButton>
        <MenuButton route="/my-pets">My Pets</MenuButton>
        <MenuButton route="/my-reports">My Reports</MenuButton>
        <LoginButton route="/login">login</LoginButton>
        <SignupButton route="/signup">Signup</SignupButton>
      </ul>
    </nav>
  );
};

export { Menu };
