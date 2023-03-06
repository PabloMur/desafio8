import React from "react";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetCardComp = ({ nombre, zona, image, id, owner }) => {
  function handleClick() {
    console.log(id);
    console.log(owner);
  }

  return (
    <div className={css.root}>
      <div className={css.imageContainer}>
        <img src={image} alt="pet image" />
      </div>
      <div className={css.petDataContainer}>
        <h3>{nombre}</h3>
        <div className={css.zoneContainer}>
          <CustomText variant="p">Zona: {zona}</CustomText>
        </div>
        <button className={css.infoButton} onClick={handleClick}>
          <CustomText variant="p">Tengo informacion</CustomText>
        </button>
      </div>
    </div>
  );
};

export { PetCardComp };
