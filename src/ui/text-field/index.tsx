import React from "react";
import css from "./index.css";

export function TextField({ name }) {
  return <input name={name} className={css.root}></input>;
}
