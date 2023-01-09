import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomText } from "ui/custom-text";
import { CustomButton, MainButton } from "ui/buttons";

const UserPasswordForm = () => {
  return (
    <div>
      <form className={css.root}>
        <label htmlFor="">
          <CustomText variant="p">Nueva Contraseña</CustomText>
          <TextField type="password" name="contUno"></TextField>
        </label>
        <label htmlFor="">
          <CustomText variant="p">Repite Contraseña</CustomText>
          <TextField type="password" name="contDos"></TextField>
        </label>
        <MainButton>Modificar Contraseña</MainButton>
      </form>
    </div>
  );
};

export { UserPasswordForm };
