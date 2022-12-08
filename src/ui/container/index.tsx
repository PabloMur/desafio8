import React from "react";
import css from "./styles.css";

const ContainerComponent = ({ children }) => {
  return <div className={css.root}>{children}</div>;
};

export { ContainerComponent };
