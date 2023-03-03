import React, { useEffect } from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { TextField } from "ui/text-field";
import { DropzoneComp } from "components/dropzone";
import { MapboxPetsAround } from "components/mapbox";
import { useRecoilValue } from "recoil";
import { editPetIdAtom } from "atoms/userAtoms";

function PetEditor() {
  const petId = useRecoilValue(editPetIdAtom);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.petname.value);
  }

  function resetForm() {
    location.reload();
  }

  useEffect(() => {
    console.log(petId);
  }, []);

  return (
    <div className={css.container}>
      <CustomText variant="title">Editar Mascota</CustomText>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="petname">
          <CustomText variant="p">Nuevo Nombre de tu Mascota:</CustomText>
          <TextField type="text" name="petname"></TextField>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Nueva imagen de tu mascota:</CustomText>
          <DropzoneComp></DropzoneComp>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Nueva ubicacion de tu Mascota:</CustomText>
          <MapboxPetsAround variant="report"></MapboxPetsAround>
        </label>

        <button>Actualizar Datos de Mascota</button>
        <button onClick={resetForm}>Cancelar edicion</button>
      </form>
    </div>
  );
}

export { PetEditor };
