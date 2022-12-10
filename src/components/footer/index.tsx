import React from "react";
import css from "./styles.css";

const Footer = () => {
  return (
    <footer className={css.root}>
      <h3 className={css.container}>
        <div className={css.find}>Donde Encontrarme</div>
        <div className={css.learn}>Donde Estudie</div>
      </h3>
    </footer>
  );
};

export { Footer };
