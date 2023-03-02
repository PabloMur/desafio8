import React from "react";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetResults = () => {
  return (
    <div className={css.container}>
      aca se van a mostrar los resultados de las busquedas del mascotas cercanas
      <button className={css.button}>
        <CustomText variant="p">Ver Resultados</CustomText>
      </button>
    </div>
  );
};

export { PetResults };
