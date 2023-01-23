import React from "react";
import { CustomButton, MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

export const MyPetCardComp = ({ nombre, zona, image }) => {
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
          <CustomButton
            onClick={() => {
              console.log("algo");
            }}
          >
            Editar Mascota
          </CustomButton>
          <CustomButton
            onClick={() => {
              console.log("algo");
            }}
          >
            Reportar como encontrada
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
