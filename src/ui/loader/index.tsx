import React from "react";
import css from "./styles.css";

export function Loader() {
  return (
    <div className={css.root}>
      <h3 className={css.texto}>Cargando...</h3>
    </div>
  );
}
