import React from "react";
import css from "./styles.css";
import { PetCardComp } from "components/pet-card";

const MyPetsContainer = () => {
  return (
    <div className={css.root}>
      <PetCardComp></PetCardComp>
    </div>
  );
};

export { MyPetsContainer };
