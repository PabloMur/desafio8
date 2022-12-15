import React from "react";
import css from "./styles.css";

const PetCardComp = () => {
  return (
    <div className={css.root}>
      <div className={css.imageContainer}>Aca va la fot del pet</div>
      <div className={css.petDataContainer}>Aca va la data del perro</div>
    </div>
  );
};

export { PetCardComp };
