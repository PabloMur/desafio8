import React, { useEffect } from "react";
import css from "./styles.css";
import { ContainerComponent } from "ui/container";
import { CustomText } from "ui/custom-text";
import { petsAround } from "atoms/userAtoms";
import { useRecoilValue } from "recoil";

const PetsAround = () => {
  const petsResults = useRecoilValue(petsAround);

  useEffect(() => {
    console.log(petsResults);
  }, []);

  return (
    <ContainerComponent>
      <CustomText variant="title">Mascotas Cerca</CustomText>
      <div className={css.root}>Contenedor de Mascotas</div>
    </ContainerComponent>
  );
};

export { PetsAround };
