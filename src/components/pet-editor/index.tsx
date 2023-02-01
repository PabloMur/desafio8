import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { TextField } from "ui/text-field";

function PetEditor() {
  return (
    <div className={css.container}>
      <CustomText variant="title">Editar Mascota</CustomText>
      <form className={css.form}>
        <label>
          <p>Nombre de la Mascota</p>
          <TextField type="text" name="pet-name"></TextField>
        </label>
      </form>
    </div>
  );
}

export { PetEditor };
