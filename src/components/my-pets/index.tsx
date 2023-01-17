import React, { useEffect } from "react";
import css from "./styles.css";
import { PetCardComp } from "components/pet-card";
import { CustomText } from "ui/custom-text";
import { useGetMePets } from "hooks";

const MyPetsContainer = () => {
  const traerMascotas = useGetMePets();

  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <div className={css.root}>
      <CustomText variant="title">Mis Mascotas</CustomText>
      <div className={css.petsContainer}>
        <PetCardComp></PetCardComp>
      </div>
    </div>
  );
};

export { MyPetsContainer };
