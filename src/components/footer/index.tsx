import React from "react";
import css from "./styles.css";

const Footer = () => {
  return (
    <footer className={css.root}>
      <h3 className={css.container}>
        <div className={css.find}>
          Donde Encontrarme: <ul></ul>
          <li>Github</li>
          <li>Linkedin</li>
        </div>
        <div className={css.learn}>
          Donde Estudie:
          <a href="www.apx.school" target="_black">
            Apx
          </a>
        </div>
      </h3>
    </footer>
  );
};

export { Footer };
