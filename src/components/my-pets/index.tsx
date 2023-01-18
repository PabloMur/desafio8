import React, { useEffect } from "react";
import css from "./styles.css";
import { PetCardComp } from "components/pet-card";
import { CustomText } from "ui/custom-text";
import { useGetMePets } from "hooks";

const MyPetsContainer = () => {
  const traerMascotas = useGetMePets();
  const mascotas = [1, 2, 3];
  let segundoTest = [];

  useEffect(() => {
    traerMascotas();
  }, []);

  const test = () => {
    segundoTest = mascotas.map((m: any) => (
      <li key={m}>
        <PetCardComp></PetCardComp>
      </li>
    ));
  };

  test();

  return (
    <div className={css.root}>
      <CustomText variant="title">Mis Mascotas</CustomText>
      <div className={css.petsContainer}>{segundoTest}</div>
    </div>
  );
};

export { MyPetsContainer };
