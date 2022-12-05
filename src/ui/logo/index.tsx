import React from "react";
import css from "./styles.css";
import { PataLogo } from "ui/assets/pata";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={css.link}>
      <div className={css.root}>
        <PataLogo />
        <h3 className={css.appName}>Pet Finder</h3>
      </div>
    </Link>
  );
};

export { Logo };
