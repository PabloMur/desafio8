import React, { useState } from "react";
import css from "./styles.css";
import { Logo } from "ui/logo";
import { Menu } from "ui/menu";
import { BurgerButton, CustomButton } from "ui/burger-button";

const Header = () => {
  function MostrarAlgo() {
    console.log("Hola");
  }
  return (
    <header className={css.root}>
      <div className={css.container}>
        <Logo />
        <Menu />
        <CustomButton handleclick={MostrarAlgo}>
          <BurgerButton />
        </CustomButton>
      </div>
    </header>
  );
};

export { Header };
