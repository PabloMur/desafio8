import React from "react";
import css from "./styles.css";

const PetCardComp = () => {
  return (
    <div className={css.root}>
      <div className={css.imageContainer}>Aca va la fot del pet</div>
      <div className={css.petDataContainer}>
        <div>
          <h3>Nombre</h3> <p>Zona</p>
        </div>
        <div>
          <a href="a">Reportar avistamiento</a>
        </div>
      </div>
    </div>
  );
};

export { PetCardComp };
