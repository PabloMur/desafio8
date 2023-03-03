import React from "react";
import { CustomText } from "ui/custom-text";
import { useGoTo } from "hooks/uiHooks";
import css from "./styles.css";
import { useDeletePet } from "hooks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { editPetIdAtom } from "atoms/userAtoms";

export const MyPetCardComp = ({ nombre, zona, image, status, id }) => {
  const goTo = useGoTo();
  const eliminarMascota = useDeletePet();
  const editPetIdSetter = useSetRecoilState(editPetIdAtom);

  function eliminar() {
    eliminarMascota(id);
  }

  return (
    <div className={css.root}>
      <div className={css.imageContainer}>
        <img src={image} alt="pet image" />
      </div>
      <div className={css.petDataContainer}>
        <h4 className={css.cardTitle}>{nombre}</h4>
        <div className={css.zoneContainer}>
          <CustomText variant="p">Zona: {zona}</CustomText>
          <CustomText variant="p">Actualmente: {status}</CustomText>
        </div>
        <div>
          <button
            className={css.editButton}
            onClick={() => {
              editPetIdSetter(id);
              goTo("/edit-pet");
            }}
          >
            <p className={css.buttonText}>Editar Mascota</p>
          </button>
          <button className={css.deletePet} onClick={eliminar}>
            <p className={css.buttonText}>Reportar como encontrada</p>
          </button>
        </div>
      </div>
    </div>
  );
};
