import React from "react";
import css from "./styles.css";
import { Logo } from "ui/logo";
import { Menu } from "ui/menu";

const Header = () => {
  return (
    <header className={css.root}>
      <Logo />
      <Menu />
    </header>
  );
};

export { Header };
