import React from "react";
import css from "./index.css";

export function MainButton({ children }) {
  return <button>{children}</button>;
}

const MenuButton = ({ children }) => {
  return <button className={css.root}>{children}</button>;
};

export { MenuButton };
