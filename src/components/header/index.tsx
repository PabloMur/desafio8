import React from "react";
import css from "./styles.css";
import { Logo } from "ui/logo";
import { Menu } from "ui/menu";
import { BurgerButton } from "ui/burger-button";

const Header = () => {
  function MostrarAlgo() {
    console.log("Hola");
  }
  return (
    <header className={css.root}>
      <div className={css.container}>
        <Logo />
        <Menu />
        <BurgerButton />
      </div>
    </header>
  );
};

export { Header };
