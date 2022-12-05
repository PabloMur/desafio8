import React from "react";
import css from "./index.css";

const MainButton = ({ children }) => {
  return <button>{children}</button>;
};

const CustomButton = ({ children, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const MenuButton = ({ children }) => {
  return <button className={css.root}>{children}</button>;
};

const LocationPermissionButton = () => {
  return <button>Aceptar y continuar!</button>;
};
export { MenuButton, CustomButton, LocationPermissionButton, MainButton };
