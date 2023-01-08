import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";

const Footer = () => {
  return (
    <footer className={css.root}>
      <div className={css.container}>
        <div className={css.find}>
          <CustomText variant="p">Dónde Contactarme:</CustomText>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className={css.learn}>
          <CustomText variant="p">Dónde Estudié:</CustomText>
          <a href="https://www.apx.school" target="_blank">
            <CustomText variant="title">APX</CustomText>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
