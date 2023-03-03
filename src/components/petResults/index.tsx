import { petsAroundLength } from "atoms/userAtoms";
import React from "react";
import { useRecoilValue } from "recoil";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

const PetResults = () => {
  const petResults = useRecoilValue(petsAroundLength);
  return (
    <div className={css.container}>
      <div>
        <CustomText variant="p">Mascotas Cerca: {petResults}</CustomText>
      </div>
      <button className={css.button}>
        <CustomText variant="p">Ver Resultados</CustomText>
      </button>
    </div>
  );
};

export { PetResults };
