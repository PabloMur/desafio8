import React from "react";
import css from "./index.css";

export function TextField({ name, type }) {
  function NormalTextField() {
    return <input name={name} className={css.root} type="text"></input>;
  }
  function PasswordTextField() {
    return <input name={name} className={css.root} type="password"></input>;
  }
  return type === "text" ? <NormalTextField /> : <PasswordTextField />;
}
