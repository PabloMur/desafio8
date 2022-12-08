import React from "react";
import { LoginButton, MenuButton } from "ui/buttons";
import { Link } from "react-router-dom";
import css from "./styles.css";

const Menu = () => {
  return (
    <nav>
      <ul className={css.root}>
        <Link to="/userdata">
          <MenuButton>My Data</MenuButton>
        </Link>
        <MenuButton>My Pets</MenuButton>
        <MenuButton>My Reports</MenuButton>
        <Link to="/login">
          <LoginButton
            handleclick={() => {
              console.log("login");
            }}
          >
            login
          </LoginButton>
        </Link>
      </ul>
    </nav>
  );
};

export { Menu };
