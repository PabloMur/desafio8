import React from "react";
import { MenuButton } from "ui/buttons";
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
      </ul>
    </nav>
  );
};

export { Menu };
