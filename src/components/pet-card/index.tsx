import React from "react";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetCardComp = ({ nombre, zona, image }) => {
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
        <div>
          <a href="a">
            <link rel="stylesheet" href="test">
              <MainButton>ver en detalle</MainButton>
            </link>
          </a>
        </div>
      </div>
    </div>
  );
};

export { PetCardComp };
