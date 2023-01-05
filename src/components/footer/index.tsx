import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";

const Footer = () => {
  return (
    <footer className={css.root}>
      <h3 className={css.container}>
        <div className={css.find}>
          Donde Encontrarme:
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className={css.learn}>
          Donde Estudie:
          <a href="https://www.apx.school" target="_blank">
            <CustomText variant="title">APX</CustomText>
          </a>
        </div>
      </h3>
    </footer>
  );
};

export { Footer };
