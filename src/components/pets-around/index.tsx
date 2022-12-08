import React from "react";
import css from "./styles.css";
import { ContainerComponent } from "ui/container";
import { CustomText } from "ui/custom-text";

const PetsAround = () => {
  return (
    <ContainerComponent>
      <CustomText variant="title">Mascotas Cerca</CustomText>
      <div className={css.root}>Contenedor de Mascotas</div>
    </ContainerComponent>
  );
};

export { PetsAround };
